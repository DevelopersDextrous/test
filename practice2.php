<html>
<head>
<title>the title</title>
   <script type="text/javascript" 
   src="/jquery/jquery-1.3.2.min.js"></script>
   <script type="text/javascript" 
   src="/jquery/jquery-ui-1.7.2.custom.min.js"></script>
   <script type="text/javascript" language="javascript">
   
    $(document).ready(function() {

      $("#hide").click(function(){
         $(".target").hide( "explode", 
                     {pieces: 16 }, 2000 );
      });

      $("#show").click(function(){
         $(".target").show( "explode", 
                      {pieces: 16}, 2000 );
      });

   });
   </script>
   <style>
      p {
           background-color:#bca;
           width:200px; 
           border:1px solid green; 
        }
     div{ width:100px; 
            height:100px; 
            background:red;  
        }
  </style>
</head>
<body>

   <p>Click on any of the buttons</p>
   <button id="hide"> Hide </button>
   <button id="show"> Show</button> 
  
   <div class="target">
   </div>
  
</body>
</html>