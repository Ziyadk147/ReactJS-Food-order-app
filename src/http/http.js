export async function getAllItems(){
  
    const response = await fetch('http://localhost:3000/meals')
    const data = await response.json();
    if(!response.ok){
        throw new Error("Error fetching Items");
    }
    
    return data;
}