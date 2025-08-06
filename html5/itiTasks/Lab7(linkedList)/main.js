var LnkdLstObj={
    data:[],
    pushVal:function(val){
        try{
        const flag=this.data.some(obj=>obj.val==val)
        if (flag) {
                throw new Error("Value already exists in the list");
        } 
        this.data.push({"val":val});
        for(var i=0;i<this.data.length-1;i++){
            for(var j=0;j<this.data.length-i-1;j++){
                if(this.data[j].val>this.data[j+1].val){
                    [this.data[j], this.data[j+1]] = [this.data[j+1], this.data[j]];
                }
            }
       }
        }
        catch(e){
            console.log(e.message);
        }
    },
    Enqueue:function(val){
        try{
        const flag=this.data.some(obj=>obj.val==val)
        if (flag) {
                throw new Error("Value already exists in the list");
        }
       this.data.unshift({"val":val});
       for(var i=0;i<this.data.length-1;i++){
            for(var j=0;j<this.data.length-i-1;j++){
                if(this.data[j].val>this.data[j+1].val){
                    [this.data[j], this.data[j+1]] = [this.data[j+1], this.data[j]];
                }
            }
        }
        }
        catch(e){
            console.log(e.message);
        }
    },

    pop:function(){
        this.data.pop();
    },

    Dequeue:function(){
        this.data.shift();
    },
    Insert:function(idx,value){
      try{
        const flag=this.data.some(obj=>obj.val==value)
        if (flag) {
                throw new Error("Value already exists in the list");
        }
        if(idx>0){
            if(this.data[idx-1].val>value)
                throw new Error("Array should be sorted")
        }
        if(idx<this.data.length-1){ 
            if(this.data[idx].val<value)
                throw new Error("Array should be sorted")
        }
        this.data.splice(idx, 0, { "val": value });
        console.log(`Value ${value} inserted at index ${idx}.`);
        

      } 
      catch(e){
        console.log(e.message);
      } 
    },

    Remove:function(value){
        var idx=this.data.findIndex(obj=>obj.val==value);
        try{
        if(idx==-1){
            throw new Error("Value not found");
        }
        this.data.splice(idx,1);
        console.log(`Value ${value} removed.`);

        }
        catch(e){
            console.log(e.message);
        }

    },


    display:function(){
        for(var i=0;i<this.data.length;i++){
            console.log(this.data[i].val);
        }
    }
}

LnkdLstObj.pushVal(0);
LnkdLstObj.pushVal(8);
LnkdLstObj.pushVal(100);
LnkdLstObj.pushVal(4);
LnkdLstObj.Enqueue(4);

// LnkdLstObj.display();
// LnkdLstObj.pop();
// LnkdLstObj.display();
// LnkdLstObj.Dequeue();
// LnkdLstObj.display();

// LnkdLstObj.Enqueue(60);
// LnkdLstObj.Enqueue(200);
//LnkdLstObj.Insert(2,5);
//LnkdLstObj.Remove(200);

LnkdLstObj.display();

