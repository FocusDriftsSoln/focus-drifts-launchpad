import { Link, useParams, Navigate } from "react-router-dom";
import { templates } from "./registry";

export default function TemplateRoute() {
  const { slug } = useParams();
  const t = templates.find((x) => x.slug === slug);
  if (!t) return <Navigate to="/templates" replace />;
  const Component = t.component;

  return (
    <div className="relative">
      <Link
        to="/templates"
        className="fixed top-4 left-4 z-[100] rounded-full bg-black/80 text-white text-xs uppercase tracking-widest px-4 py-2 backdrop-blur hover:bg-black"
      >
        ← All templates
      </Link>
      <Component />
    </div>
  );
}
