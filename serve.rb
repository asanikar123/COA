require 'webrick'

ROOT = File.dirname(File.expand_path(__FILE__))
PORT = 3000

server = WEBrick::HTTPServer.new(
  Port: PORT,
  DocumentRoot: ROOT,
  AccessLog: [],
  Logger: WEBrick::Log.new($stdout, WEBrick::Log::INFO)
)

puts "Serving #{ROOT} at http://localhost:#{PORT}"
trap('INT') { server.shutdown }
server.start
