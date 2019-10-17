var typeWriter = {

    flash:false,
    node:0,
    i:0,
    ii:0,
    txt: [],

    init(text) {
        this.txt = text;
        if(this.txt.length){
            this.typeWriter();
        }
        
    },

    getPrints() {
        return this.txt;
    },

    typeWriter() {

        var _this = this;

        var txt = this.getPrints(); /* The text */
        var speed = 100; /* The speed/duration of the effect in milliseconds */

        if (this.i <= txt[this.node].length) {
            document.getElementById("term").placeholder += txt[this.node].charAt(this.i);
            this.i++;
            
            setTimeout(function() { _this.typeWriter() }, speed);
        }
        else {
            this.ii++;
            var str = document.getElementById("term").placeholder;
            if(!this.flash) {
                document.getElementById("term").placeholder += "|";
                this.flash = true;
            }
            else {
                document.getElementById("term").placeholder = str.substring(0, str.length - 1);
                this.flash = false;
            }

            if(this.ii > 4) {
                document.getElementById("term").placeholder = str.substring(0, str.length - 1);
                
                if(str.length == 0) {
                    this.i = 0;
                    this.ii = 0;
                    this.flash = false;

                    if(this.node + 1 < txt.length) {
                        this.node++;
                        
                    }
                    else {
                        this.node= 0;
                    }
                    
                }

                setTimeout(function() { _this.typeWriter() }, speed);

                return;
                
            }

            setTimeout(function() { _this.typeWriter() }, 1000);
        }

    }

}