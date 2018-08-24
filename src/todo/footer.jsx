import '../assets/styles/footer.css'

export default{
    data(){
        return {
            author:"muyu"
        }
    },
    render(){
         return (
             <div id="footer">
                 <span>written by {this.author}</span>
             </div>
         )
     }
}

 