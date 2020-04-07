<template>
<div>
    <div class="main">
        <div class="textview">
            <p>{{result}}</p>       
        </div>
        <table>
            <tr>
                <td>                     
                    <ActionButton class="button symbol blue"  @cleanAll= "cleanAll" event="cleanAll"> C </ActionButton>
                </td>
                <td  class="button" />
                <td>
                    <ActionButton class="button symbol blue"  @drop= "drop" event="drop"> ← </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate('/')" event="operate"> / </ActionButton>
                </td>
            </tr>
            <tr>
                <td>
                     <ActionButton class="button symbol blue" @operate= "operate(7)" event="operate"> 7 </ActionButton>
                </td>
                <td>
                    
                    <ActionButton class="button symbol blue" @operate= "operate(8)" event="operate"> 8 </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate(9)" event="operate"> 9 </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate('*')" event="operate"> * </ActionButton>
                </td>
            </tr>
            <tr>
               <td>
                    <ActionButton class="button symbol blue" @operate= "operate(4)" event="operate"> 4 </ActionButton>
                </td>
                <td>
                    <ActionButton class="button symbol blue" @operate= "operate(5)" event="operate"> 5 </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate(6)" event="operate"> 6 </ActionButton>
                </td>
                 <td>
                     <ActionButton class="button symbol blue" @operate= "operate('-')" event="operate"> - </ActionButton>
                </td>
            </tr>
            <tr>
                <td>
                    <ActionButton class="button symbol blue" @operate= "operate(1)" event="operate"> 1 </ActionButton>
                </td>
                <td>
                    <ActionButton class="button symbol blue" @operate= "operate(2)" event="operate"> 2 </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate(3)" event="operate"> 3 </ActionButton>
                </td>
                 <td>
                     <ActionButton class="button symbol blue" @operate= "operate('+')" event="operate"> + </ActionButton>
                </td>
            </tr>
           <tr>
                <td class="button"/>
                <td>
                    <ActionButton class="button symbol blue" @operate= "operate(0)" event="operate"> 0 </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue" @operate= "operate('.')" event="operate"> . </ActionButton>
                </td>
                 <td>
                    <ActionButton class="button symbol blue"  @equal= "equal" event="equal"> = </ActionButton>
                </td>
            </tr>
        </table>      
    </div>
</div> 
</template>

<script>
import ActionButton from "./ActionButton"

export default {
  name: 'Calculator',
  components:{
    ActionButton
  },
  data () {
    return {
     formula :"",
     result : 0 
    }
  },
  methods:{
    operate(element){
       console.log("operate..");
       this.formula +=element;
       this.updateResult();
    },
    equal(){
      console.log("equal..");
      this.result = eval(this.formula); 
    },
    cleanAll(){
      console.log("cleanAll..");
      this.formula = "";
      this.result = 0;
    },
     drop(){
        console.log("drop..");
        this.formula = this.formula.slice(0, -1);
        this.updateResult();
    },
    updateResult(){
        if(this.formula.length == 0){
            this.result = 0;
        } else {
            this.result = this.formula;
        }        
    }

  }

}
</script>

<style scoped>
.button {
    width: 75px;
    height: 50px;
    font-size: 25px;
    margin: 2px;
    cursor: pointer;
    border: none;
}

.textview {
    width: 304px;
    margin: 5px;
    font-size: 25px;
    padding: 10px;
    border: none;
    background-color: white;
    text-align: right;
}

.main {
    width: 335px;
    height: 400px;
    background-color: #efecec;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%)translateY(-50%);
    border: 1px solid gray;
}

.number {
    background-color: white;
    font-weight: bold;
}

.symbol {
    background-color: #fbfbfb;
}

.gray:hover {
    background-color:  #e0e0e0;
}

.blue:hover {
    background-color:  #03a9f4;
}

</style> 
