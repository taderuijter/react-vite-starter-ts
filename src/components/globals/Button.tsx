function Button() {
  return (
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      role="button"
      aria-label="GitHub repository">
      Check on GitHub
    </a>
  );
}

export default Button;
