import { RedirectToast } from "@/components/redirect-toast";

/**
 *  Well, this is a template component that wraps the entire application.
 *  it's a good place to put global components that should be rendered on every page.
 *  For example, the `RedirectToast` component is a good candidate for this.
 *  However; this does not seem to work with the current version of Next.js.
 *  https://github.com/vercel/next.js/issues/60032
 */
export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <RedirectToast />
    </>
  );
}
