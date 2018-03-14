<head>
  <link rel="stylesheet" type="text/css" href="Styles/library.css">
  <link rel="shortcut icon" href="Images/favicon.png" type="image/x-png">
</head>
<body>
</body>
<script>
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>