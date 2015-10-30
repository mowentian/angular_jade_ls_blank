for i in [0 to 8] by 1
  qrcode = new QRCode document.getElementById ('qrcode' + i)
  # alert ('qrcode' + i)
  # alert document.getElementById ('qrcode' + i)
  makeCode = !->
    elText = document.getElementById ('text' + i)
    qrcode.makeCode elText.value
  makeCode!
