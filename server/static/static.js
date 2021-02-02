const path = require('path');
const fs = require('fs');

const MIME_CONTENT_TYPES = {
	"css": "text/css", // Cascading Style Sheets (CSS)
	"csv": "text/csv", // Comma-separated values (CSV)
	"htm": "text/html", // HyperText Markup Language (HTML)
	"html": "text/html", // HyperText Markup Language (HTML)
	"ics": "text/calendar", // iCalendar format
	"js": "text/javascript", // per the following specifications: https://html.spec.whatwg.org/multipage/#scriptingLanguages, https://html.spec.whatwg.org/multipage/#dependencies:willful-violation, https://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/ JavaScript
	"mjs": "text/javascript", // JavaScript module
	"txt": "text/plain", // Text, (generally ASCII or ISO 8859-n)
	"xml": "text/xml", // if readable from casual users (RFC 3023, section 3) "application/xml" if not readable from casual users (RFC 3023, section 3)", // XML
	"bmp": "image/bmp", // Windows OS/2 Bitmap Graphics
	"gif": "image/gif", // Graphics Interchange Format (GIF)
	"ico": "image/vnd.microsoft.icon", // Icon format
	"jpeg": "image/jpeg", // JPEG images
	"jpg": "image/jpeg", // JPEG images
	"png": "image/png", // Portable Network Graphics
	"svg": "image/svg+xml", // Scalable Vector Graphics (SVG)
	"tif": "image/tiff", // Tagged Image File Format (TIFF)
	"tiff": "image/tiff", // Tagged Image File Format (TIFF)
	"webp": "image/webp", // WEBP image
	"otf": "font/otf", // OpenType font
	"ttf": "font/ttf", // TrueType Font
	"woff": "font/woff", // Web Open Font Format (WOFF)
	"woff2": "font/woff2", // Web Open Font Format (WOFF)
	"aac": "audio/aac", // AAC audio
	"mid": "audio/midi audio/x-midi", // Musical Instrument Digital Interface (MIDI)
	"midi": "audio/midi audio/x-midi", // Musical Instrument Digital Interface (MIDI)
	"mp3": "audio/mpeg", // MP3 audio
	"mp4": "audio/mp4", // MP4 video
	"oga": "audio/ogg", // OGG audio
	"opus": "audio/opus", // Opus audio
	"wav": "audio/wav", // Waveform Audio Format
	"weba": "audio/webm", // WEBM audio
	"avi": "video/x-msvideo", // AVI: Audio Video Interleave
	"mpeg": "video/mpeg", // MPEG Video
	"ogv": "video/ogg", // OGG video
	"ts": "video/mp2t", // MPEG transport stream
	"webm": "video/webm", // WEBM video
	"3gp": "video/3gpp", //	audio/3gpp if it doesn't contain video", // 3GPP audio/video container
	"3g2": "video/3gpp2", // audio/3gpp2 if it doesn't contain video", // 3GPP2 audio/video container
	"abw": "application/x-abiword", // AbiWord document
	"arc": "application/x-freearc", // Archive document (multiple files embedded)
	"azw": "application/vnd.amazon.ebook", // Amazon Kindle eBook format
	"bin": "application/octet-stream", // Any kind of binary data
	"bz": "application/x-bzip", // BZip archive
	"bz2": "application/x-bzip2", // BZip2 archive
	"csh": "application/x-csh", // C-Shell script
	"doc": "application/msword", // Microsoft Word
	"docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Microsoft Word (OpenXML)
	"eot": "application/vnd.ms-fontobject", // MS Embedded OpenType fonts
	"epub": "application/epub+zip", // Electronic publication (EPUB)
	"gz": "application/gzip", // GZip Compressed Archive
	"jar": "application/java-archive", // Java Archive (JAR)
	"json": "application/json", // JSON format
	"jsonld": "application/ld+json", // JSON-LD format
	"map": "application/ld+json", // sourcemaps
	"mpkg": "application/vnd.apple.installer+xml", // Apple Installer Package
	"odp": "application/vnd.oasis.opendocument.presentation", // OpenDocument presentation document
	"ods": "application/vnd.oasis.opendocument.spreadsheet", // OpenDocument spreadsheet document
	"odt": "application/vnd.oasis.opendocument.text", // OpenDocument text document
	"ogx": "application/ogg", // OGG
	"pdf": "application/pdf", // Adobe Portable Document Format (PDF)
	"php": "application/x-httpd-php", // Hypertext Preprocessor (Personal Home Page)
	"ppt": "application/vnd.ms-powerpoint", // Microsoft PowerPoint
	"pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", // Microsoft PowerPoint (OpenXML)
	"rar": "application/vnd.rar", // RAR archive
	"rtf": "application/rtf", // Rich Text Format (RTF)
	"sh": "application/x-sh", // Bourne shell script
	"swf": "application/x-shockwave-flash", // Small web format (SWF) or Adobe Flash document
	"tar": "application/x-tar", // Tape Archive (TAR)
	"vsd": "application/vnd.visio", // Microsoft Visio
	"webmanifest": "application/json", // webmanifest
	"xhtml": "application/xhtml+xml", // XHTML
	"xls": "application/vnd.ms-excel", // Microsoft Excel
	"xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Microsoft Excel (OpenXML)
	"xul": "application/vnd.mozilla.xul+xml", // XUL
	"zip": "application/zip", // ZIP archive
	"7z": "application/x-7z-compressed", // 7-zip archive,
	"glb": "application/octet-stream", // Glb
	"gltf": "application/octet-stream", // Gltf
	"fbx": "application/octet-stream", // Fbx
	"usdz": "application/octet-stream", // Usdz
};
const MIME_TEXT = [
	'css', 'csv', 'htm', 'html', 'ics', 'js', 'mjs', 'txt', 'xml',
];
const MIME_IMAGE = [
	'bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'svg', 'tif', 'tiff', 'webp',
];
const MIME_FONTS = [
	'otf', 'ttf', 'woff', 'woff2',
];
const MIME_AUDIO = [
	'aac', 'mid', 'midi', 'mp3', 'oga', 'opus', 'wav', 'weba',
];
const MIME_VIDEO = [
	'mp4', 'avi', 'mpeg', 'ogv', 'ts', 'webm', '3gp', '3g2',
];
const MIME_APPLICATION = [
	'abw', 'arc', 'azw', 'bin', 'bz', 'bz2', 'csh', 'doc', 'docx', 'eot', 'epub', 'gz', 'jar', 'json', 'jsonld', 'map', 'mpkg', 'odp', 'ods', 'odt', 'ogx', 'pdf', 'php', 'ppt', 'pptx', 'rar', 'rtf', 'sh', 'swf', 'tar', 'vsd', 'webmanifest', 'xhtml', 'xls', 'xlsx', 'xul', 'zip', '7z',
	'glb', 'gltf', 'fbx', 'usdz',
];
const MIME_TYPES = [
	...MIME_TEXT,
	...MIME_IMAGE,
	...MIME_FONTS,
	...MIME_AUDIO,
	...MIME_VIDEO,
	...MIME_APPLICATION,
];

function staticMiddleware(vars) {
	if (!vars.root) {
		throw new Error('missing Vars.root!');
	}
	if (!vars.baseHref) {
		throw new Error('missing Vars.baseHref!');
	}
	return (request, response, next) => {
		const url = unescape(request.baseUrl.replace(/\\/g, '/'));
		const baseHref = vars.baseHref.substr(0, vars.baseHref.length - 1).replace(/\\/g, '/');
		const regExpText = `^(${baseHref})?(\\/[^\\?\\#]+)(\\.(${MIME_TYPES.join('|')}))(\\?.+)?(\\#.+)?$`;
		// console.log('regExpText', url, regExpText);
		const regExp = new RegExp(regExpText);
		// console.log('NodeJs.regExp', regExp);
		const matches = regExp.exec(url);
		// console.log(request.url, request.baseUrl, request.originalUrl, match);
		if (matches) {
			const extension = matches[4];
			const file = path.join(matches[2] + '.' + extension);
			const filePath = path.join(__dirname, '../', vars.root, file);
			fs.readFile(filePath, {}, (error, data) => {
				if (error) {
					console.log('NodeJs.staticMiddleware.notFound', file);
					return next();
				}
				console.log('NodeJs.staticMiddleware.serving', file);
				response.set('Content-Length', data.length);
				response.set('Content-Type', MIME_CONTENT_TYPES[extension]);
				// response.set('Cache-Control', 'max-age=31536000');
				response.send(data);
			});
		} else {
			// console.log('NodeJs.staticMiddleware.unmatch', file);
			next();
		}
	};
};

module.exports = {
	mimeContentTypes: MIME_CONTENT_TYPES,
	mimeText: MIME_TEXT,
	mimeImage: MIME_IMAGE,
	mimeFonts: MIME_FONTS,
	mimeAudio: MIME_AUDIO,
	mimeVideo: MIME_VIDEO,
	mimeApplication: MIME_APPLICATION,
	staticMiddleware: staticMiddleware,
};
