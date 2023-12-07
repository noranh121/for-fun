// wrote the code while learning the algorithm 
// with the help of Michael Toth’s JS visualisation of percolation
// through union find and added detect cycles 

class disjointSet {
    constructor (N) {
        this.id = []
        for (var i = 0; i < N; i++) {
                this.id[i] = -1;
            }
    }
    connected = (p, q) => {
        return this.id[p] === this.id[q];
    }
    findParent = (p) => {
        var pid = this.id[p]
        if (pid < 0) {
            return p;
        }
        if (pid > 0) {
            this.id[p] = this.findParent(pid)
        }
        return this.id[p];
    }

    union = (p, q) => { 
        var parentP = this.findParent(p);
        var parentQ = this.findParent(q);
        if (parentP == parentQ) {
            return this.detectCycle(p,q);
        }
        
        if (this.id[parentP] <= this.id[parentQ]) { 
            // parent of p has more children
            this.id[parentP] += this.id[parentQ];
            this.id[parentQ] = parentP;
        }
        else {
            // parent of q has more children
            this.id[parentQ] += this.id[parentP];
            this.id[parentP] = parentQ;
        }
    }

    detectCycle = (p,q) => { 
        console.log("found a cycle when adding + (" + p + "," + q + ")");
    }

}


// examples

// #1
const ds = new disjointSet(9);
ds.union(1, 2);
ds.union(3, 4);
ds.union(5, 6);
ds.union(7, 8);
ds.union(2, 4);
ds.union(2, 5);
ds.union(1, 3);
ds.union(6, 8);
ds.union(5, 7);
