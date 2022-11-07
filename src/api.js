
function buttonClicked(){
    input=document.getElementById("name").value 
    input2=document.getElementById("name2").value 
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${input}&product_category=${input2}`
    fetch (url)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
            if(data[0]!=null){

                document.getElementById("info").removeAttribute("hidden")
                if (data[0].image_link != null){
                    document.getElementById("myImg").src = data[0].image_link;
                    
                if (data[0].name != null){
                        document.getElementById("display1.0").innerHTML=data[0].name
                    }
                if (data[0].product_type != null){
                        document.getElementById("display1.1").innerHTML=data[0].product_type
                    }
                    else{
                        document.getElementById("display1.1").append("Not Available")
                    }
                if (data[0].category != null){
                        document.getElementById("display1.2").innerHTML=data[0].category
                    }
                    else{
                        document.getElementById("display1.2").append("Not Available")
                    }
                if (data[0].rating != null){
                        document.getElementById("display1.3").innerHTML=data[0].rating
                    }
                    else{
                        document.getElementById("display1.3").append("Not Available")
                    }
                if (data[0].description != null){
                        document.getElementById("display1.4").innerHTML=data[0].description
                    }
                    else{
                        document.getElementById("display1.4").append("Not Available")
                    }
                 if (data[0].price != null){
                        document.getElementById("display1.5").innerHTML=data[0].price
                    }
                    else{
                        document.getElementById("display1.5").append("Not Available")
                    }
                 if (data[0].product_link != null){
                        document.getElementById("display1.6").innerHTML=data[0].product_link
                    }
                    else{
                        document.getElementById("display1.6").append("Not Available")
                    }
                }
            }
            
            else{
                alert("Item Not Available")
                console.log("item not available")
            }
        })
}