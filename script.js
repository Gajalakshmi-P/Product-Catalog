body{
  font-family:Arial,sans-serif;
  margin:0;
  background:#f4f4f4;
}

header{
  background:#2563eb;
  color:white;
  padding:20px;
  text-align:center;
}

#search{
  padding:10px;
  width:250px;
}

.products{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
  padding:20px;
}

.card{
  background:white;
  padding:15px;
  border-radius:10px;
  box-shadow:0 0 10px rgba(0,0,0,0.1);
  text-align:center;
}

.card img{
  width:100%;
  border-radius:10px;
}
