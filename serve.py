import http.server, socketserver, os

PORT = int(os.environ.get("PORT", 3000))
ROOT = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        # Map Netlify-style pretty URLs (e.g. /about, /programs/) to .html files
        fs_path = super().translate_path(path)
        if not os.path.exists(fs_path) and not os.path.isdir(fs_path):
            html = fs_path + ".html"
            if os.path.isfile(html):
                return html
        return fs_path

# allow_reuse_address must be set before the socket binds, so set it on the class
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving {ROOT} at http://localhost:{PORT}")
    httpd.serve_forever()
