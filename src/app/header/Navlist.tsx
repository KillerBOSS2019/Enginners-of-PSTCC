export function NavList() {
    return (
      <div className="flex flex-col items-center gap-4 sm:flex-row lg:flex-row lg:gap-x-4">
        <a href="./" className="text-xl font-semibold">Home</a>
        <a href="./project" className="text-xl font-semibold">Project</a>
        <a href="./#team" className="text-xl font-semibold">Meet the Team</a>
        <a href="./#sponsors" className="text-xl font-semibold">Sponsors</a>
      </div>
    );
}