export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ankit Nandoliya. All rights reserved. Proudly visualized and made in India.
        </p>
      </div>
    </footer>
  );
}
