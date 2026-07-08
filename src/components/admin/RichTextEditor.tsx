"use client";

import { useCallback, useRef, useState } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapImage from "@tiptap/extension-image";
import LinkExtension from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

// Extend the default Image extension so the `title` attribute (shown as a
// hover tooltip) is preserved in the saved HTML — TipTap's base Image
// extension only persists `src` and `alt` out of the box.
const ImageExtension = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      title: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("title"),
        renderHTML: (attributes: { title?: string | null }) =>
          attributes.title ? { title: attributes.title } : {},
      },
    };
  },
});
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  Link2Off,
  ImageIcon,
  Undo2,
  Redo2,
  Loader2,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

function ToolbarButton({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-2 rounded-lg border transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed ${
        active
          ? "bg-teal-500/15 border-teal-500/40 text-teal-400"
          : "bg-navy-950 border-white/10 text-slate-300 hover:text-white hover:border-teal-500/40"
      }`}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingImg, setIsUploadingImg] = useState(false);

  // Internal + external linking: prompts for a URL. Accepts full URLs
  // (https://...) or internal paths (/services/seo, /blog/some-post) so
  // writers can link to other RankNex AI pages directly from the editor.
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt(
      "Enter URL (use /blog/post-slug or /services/seo for internal links):",
      previousUrl || "https://"
    );

    if (url === null) return; // cancelled

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const unsetLink = useCallback(() => {
    editor.chain().focus().unsetLink().run();
  }, [editor]);

  const triggerImageUpload = () => fileInputRef.current?.click();

  const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImg(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (res.ok && data.url) {
        const alt = window.prompt("Alt text (describes the image for SEO & accessibility):", "") || "";
        const title = window.prompt("Image title (optional, shown as tooltip on hover):", "") || "";

        editor
          .chain()
          .focus()
          .setImage({ src: data.url, alt, title: title || undefined } as {
            src: string;
            alt: string;
            title?: string;
          })
          .run();
      } else {
        alert(data.error || "Image upload failed.");
      }
    } catch {
      alert("Network error. Image upload failed.");
    } finally {
      setIsUploadingImg(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-navy-900 border border-white/10 border-b-0 rounded-t-xl sticky top-16 lg:top-0 z-10">
      <ToolbarButton
        title="Bold"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Italic"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="w-4 h-4" />
      </ToolbarButton>

      <span className="w-px h-6 bg-white/10 mx-1" />

      <ToolbarButton
        title="Heading 2"
        active={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Heading 3"
        active={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 className="w-4 h-4" />
      </ToolbarButton>

      <span className="w-px h-6 bg-white/10 mx-1" />

      <ToolbarButton
        title="Bullet List"
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Numbered List"
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Quote"
        active={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="w-4 h-4" />
      </ToolbarButton>

      <span className="w-px h-6 bg-white/10 mx-1" />

      <ToolbarButton title="Insert Link" active={editor.isActive("link")} onClick={setLink}>
        <Link2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Remove Link"
        onClick={unsetLink}
        disabled={!editor.isActive("link")}
      >
        <Link2Off className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton title="Insert Image" onClick={triggerImageUpload} disabled={isUploadingImg}>
        {isUploadingImg ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageIcon className="w-4 h-4" />}
      </ToolbarButton>
      <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageFile} />

      <span className="w-px h-6 bg-white/10 mx-1" />

      <ToolbarButton
        title="Undo"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
      >
        <Undo2 className="w-4 h-4" />
      </ToolbarButton>
      <ToolbarButton
        title="Redo"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
      >
        <Redo2 className="w-4 h-4" />
      </ToolbarButton>
    </div>
  );
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      ImageExtension.configure({ HTMLAttributes: { loading: "lazy" } }),
      LinkExtension.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: "noopener noreferrer" },
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write your article here…",
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "tiptap-editor-content",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="tiptap-editor">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="w-full bg-navy-950 border border-white/10 rounded-b-xl p-4 min-h-[400px] focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 [&_.ProseMirror]:min-h-[380px] [&_.ProseMirror]:outline-none"
      />
    </div>
  );
}
