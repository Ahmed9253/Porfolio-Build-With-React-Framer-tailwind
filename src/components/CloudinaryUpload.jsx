import { useEffect, useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function CloudinaryUpload({ onUpload, currentImage }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    /* Load */
    if (!window.cloudinary) {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        cloudinaryRef.current = window.cloudinary;
      };
    } else {
      cloudinaryRef.current = window.cloudinary;
    }
  }, []);

  /* Open */
  const handleUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Upload button clicked!");
    console.log("Cloudinary loaded:", !!cloudinaryRef.current);

    if (!cloudinaryRef.current) {
      alert("Cloudinary is still loading. Please wait a moment and try again.");
      return;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;

    console.log("Credentials:", {
      cloudName,
      uploadPreset,
      apiKey: apiKey ? "***" : "missing",
    });

    if (!cloudName || !uploadPreset || !apiKey) {
      alert(
        `Cloudinary credentials missing:\n- Cloud Name: ${
          cloudName ? "✓" : "✗"
        }\n- Upload Preset: ${uploadPreset ? "✓" : "✗"}\n- API Key: ${
          apiKey ? "✓" : "✗"
        }`
      );
      return;
    }

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        apiKey: apiKey,
        sources: ["local", "url", "camera"],
        multiple: false,
        maxFiles: 1,
        clientAllowedFormats: ["png", "jpg", "jpeg", "webp", "gif"],
        maxFileSize: 5000000, // 5MB
        folder: "portfolio-projects",
        cropping: false,
        showSkipCropButton: true,
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#2563EB",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#2563EB",
            action: "#2563EB",
            inactiveTabIcon: "#94A3B8",
            error: "#EF4444",
            inProgress: "#2563EB",
            complete: "#10B981",
            sourceBg: "#F8FAFC",
          },
        },
      },
      (error, result) => {
        if (error) {
          console.error("Upload error:", error);
          alert("Upload failed. Please try again.");
          return;
        }

        if (result && result.event === "success") {
          onUpload(result.info.secure_url);
        }
      }
    );

    widgetRef.current.open();
  };

  return (
    <div className="space-y-3">
      <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
        Project Image
      </label>

      {/* Preview */}
      {currentImage && (
        <div className="relative overflow-hidden rounded-lg border-2 border-slate-200 dark:border-slate-700">
          <img
            src={currentImage}
            alt="Preview"
            className="h-48 w-full object-cover"
          />
        </div>
      )}

      {/* Button */}
      <button
        type="button"
        onClick={handleUpload}
        className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-6 py-4 text-slate-700 dark:text-slate-200 transition-all hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer active:scale-95"
        style={{ pointerEvents: "auto" }}
      >
        <FaCloudUploadAlt className="text-2xl" />
        <span className="font-medium">
          {currentImage ? "Change Image" : "Upload Image"}
        </span>
      </button>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Supported: PNG, JPG, JPEG, WEBP, GIF (Max 5MB)
      </p>
    </div>
  );
}
