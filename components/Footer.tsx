export default function Footer() {
  return (
    <footer className="mt-24 bg-purple-600 text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-4 text-center">
        {/* Contact */}
        <p className="text-sm">
          Contact:&nbsp;
          <a
            href="mailto:thelordduck22@proton.me"
            className="font-medium underline underline-offset-4 hover:text-purple-200 transition"
          >
            thelordduck22@proton.me
          </a>
        </p>

        {/* Divider */}
        <div className="mx-auto h-px w-24 bg-purple-300/50" />

        {/* Legal text */}
        <p className="text-xs text-purple-100 leading-relaxed max-w-3xl mx-auto">
          StandardPauper is unofficial Fan Content permitted under the Fan
          Content Policy. Not approved or endorsed by Wizards of the Coast.
          Portions of the materials used are property of Wizards of the Coast. ©
          Wizards of the Coast LLC.
        </p>
      </div>
    </footer>
  );
}
