const template = function(opts) {
	return `
	  <!DOCTYLE html>
	  <html>
		<head>
		  <title>Ideas | Ideas</title>
		  <meta name="description" content="A container of ideas">
			<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet">
		  <link rel="stylesheet" href="/dist/style.css" />
		</head>
		<body>
		
		<div style="position: absolute;height: 1px;width: 1px;overflow: hidden; opacity: .0001;">
			<svg>
				<symbol id="cross" width="32" height="32" viewBox="0 0 32 32"><title>glyph</title><path fill="#1A1A1A" d="M28.256 2L16 14.255 3.744 2 2 3.744 14.256 16 2 28.255 3.744 30 16 17.743 28.256 30 30 28.254 17.744 16 30 3.744" fill-rule="evenodd"/></symbol>
				<symbol id="checkbox-checked" viewBox="0 0 32 32">
					<path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM14 24.828l-7.414-7.414 2.828-2.828 4.586 4.586 9.586-9.586 2.828 2.828-12.414 12.414z"></path>
				</symbol>
				<symbol id="checkbox-unchecked" viewBox="0 0 32 32">
					<path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z"></path>
				</symbol>
				<symbol id="bin" viewBox="0 0 32 32">
					<path d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>
					<path d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>
				</symbol>
				<symbol id="toggle-on" viewBox="0 0 32 28">
					<path d="M0 14c0-5.516 4.484-10 10-10h12c5.516 0 10 4.484 10 10s-4.484 10-10 10h-12c-5.516 0-10-4.484-10-10zM22 22c4.406 0 8-3.594 8-8s-3.594-8-8-8-8 3.594-8 8 3.594 8 8 8z"></path>
				</symbol>
				<symbol id="toggle-off" viewBox="0 0 32 28">
					<path d="M18 14c0-4.406-3.594-8-8-8s-8 3.594-8 8 3.594 8 8 8 8-3.594 8-8zM30 14c0-4.406-3.594-8-8-8h-6.031c2.438 1.828 4.031 4.734 4.031 8s-1.594 6.172-4.031 8h6.031c4.406 0 8-3.594 8-8zM32 14c0 5.516-4.484 10-10 10h-12c-5.516 0-10-4.484-10-10s4.484-10 10-10h12c5.516 0 10 4.484 10 10z"></path>
				</symbol>
	
				<symbol id="plus" width="32" height="32" viewBox="0 0 32 32"><path d="M18.143 13.857V1h-4.286v12.857H1v4.286h12.857V31h4.286V18.143H31v-4.286H18.143z"  fill-rule="evenodd" /></symbol>
	
				<symbol id="exit" viewBox="0 0 32 32">
					<title>exit</title>
					<path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
				</symbol>
			</svg>
		</div>
		  <div id="root">${opts.body}</div>
		</body>
		<script>
		  window.__initialState = ${opts.initialState}
		</script>
		<!-- Client bundle generated by webpack -->
		<script src='/dist/bundle.js'></script>
	  </html>
	  `;
}

module.exports = template;