<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEW HHH - Premium Collection</title>
    <style>
        body { font-family: sans-serif; text-align: center; background: #f4f4f4; margin: 0; padding: 15px; }
        .logo-top { width: 70px; margin-bottom: 10px; border-radius: 50%; }
        .card { background: white; padding: 20px; border-radius: 25px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); max-width: 400px; margin: auto; }
        
        /* Realistic Logo Overlay */
        .img-box { position: relative; width: 100%; border-radius: 15px; overflow: hidden; }
        .main-img { width: 100%; display: block; border-radius: 15px; }
        .hoodie-logo { 
            position: absolute; 
            top: 48%; left: 50%; 
            transform: translate(-50%, -50%); 
            width: 80px; 
            opacity: 0.8; 
            mix-blend-mode: soft-light; /* Kapde par asli dikhne ke liye */
            filter: contrast(1.2);
        }

        .thumb-container { display: flex; justify-content: center; gap: 8px; margin: 15px 0; }
        .thumb { width: 60px; height: 60px; border-radius: 10px; cursor: pointer; border: 2px solid #eee; object-fit: cover; }
        .price { color: #1b5e20; font-size: 26px; font-weight: bold; margin: 10px 0; }
        .buy-btn { background: black; color: white; width: 100%; padding: 15px; border: none; border-radius: 12px; font-size: 18px; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>

    <img src="20251208_190849.png" class="logo-top">

    <div class="card">
        <h2 style="margin-top:0;">NEW HHH PREMIUM</h2>
        
        <div class="img-box">
            <img id="view" src="050dbe7e-2ace-417e-b602-4f72fd5f9be5.jpg" class="main-img">
            <img src="20251208_190849.png" class="hoodie-logo">
        </div>

        <div class="thumb-container">
            <img src="050dbe7e-2ace-417e-b602-4f72fd5f9be5.jpg" class="thumb" onclick="document.getElementById('view').src=this.src">
            <img src="066935a5ad67999bd4e58cbe5d3648f7.jpg" class="thumb" onclick="document.getElementById('view').src=this.src">
            <img src="1b1b96ddcece496bbe7d896e8f3c693e.jpg" class="thumb" onclick="document.getElementById('view').src=this.src">
            <img src="1765202148167.jpg" class="thumb" onclick="document.getElementById('view').src=this.src">
        </div>

        <div class="price">₹1,999</div>
        <button class="buy-btn" onclick="window.location.href='https://wa.me/91XXXXXXXXXX?text=Mujhe NEW HHH Hoodie order karni hai'">Order on WhatsApp</button>
    </div>

</body>
</html>
