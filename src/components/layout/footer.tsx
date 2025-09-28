export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-5xl px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MiniPort. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
