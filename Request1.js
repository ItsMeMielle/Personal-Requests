(function findEscape() {
    class Graph {
        constructor() {
            this.vertices = [];
            this.adjacent = {};
            this.edges = 0;
        }

        addVertex(v) {
            this.vertices.push(v);
            this.adjacent[v] = [];
        }

        addEdge(v, w) {
            this.adjacent[v].push(w);
            this.adjacent[w].push(v);
            this.edges++;
        }


        bfs(goal, root = this.vertices[0]) {
            let adj = this.adjacent;

            const queue = [];
            queue.push(root);

            const discovered = [];
            discovered[root] = true;

            const edges = [];
            edges[root] = 0;

            const predecessors = [];
            predecessors[root] = null;

            const buildPath = (goal, root, predecessors) => {
                const stack = [];
                stack.push(goal);

                let u = predecessors[goal];

                while (u != root) {
                    stack.push(u);
                    u = predecessors[u];
                }

                stack.push(root);
                window.escapePath = stack.join('-');
            }


            while (queue.length) {
                let v = queue.shift();
                if (v === goal) {
                    return {
                        distance: edges[goal],
                        path: buildPath(goal, root, predecessors)
                    };
                }

                for (let i = 0; i < adj[v].length; i++) {
                    if (!discovered[adj[v][i]]) {
                        discovered[adj[v][i]] = true;
                        queue.push(adj[v][i]);
                        edges[adj[v][i]] = edges[v] + 1;
                        predecessors[adj[v][i]] = v;
                    }
                }
            }

            return false;
        }

        dfs(goal, v = this.vertices[0], discovered = []) {
            let adj = this.adjacent;

            discovered[v] = true;

            for (let i = 0; i < adj[v].length; i++) {
                let w = adj[v][i];

                if (!discovered[w]) {
                    this.dfs(goal, w, discovered);
                }
            }

            return discovered[goal] || false;
        }
    }

    const g = new Graph();
    g.addVertex("Fk3n//");
    g.addVertex("Gxc/O1");
    g.addVertex("Rtpx3.");
    g.addVertex("hFoQ7/");
    g.addVertex("nokkL1");
    g.addVertex("ErMpl1");
    g.addVertex("6BadW1");
    g.addVertex("QAHMh/");
    g.addVertex("QN6bB1");
    g.addVertex("dhd8f/");
    g.addVertex("gSlFB.");
    g.addVertex("BQxP71");
    g.addVertex("M9rcu.");
    g.addVertex("BaAUD/");
    g.addVertex("1spc61");
    g.addVertex("in2gN.");
    g.addVertex("CIfau0");
    g.addVertex("65B72/");
    g.addVertex("hPqxf/");
    g.addVertex("bE2IJ0");
    g.addVertex("FxrML1");
    g.addVertex("dy1ZC0");
    g.addVertex("YSl7e.");
    g.addVertex("4jYju.");
    g.addVertex("pbGxl1");
    g.addVertex("jzUkl0");
    g.addVertex("QAb1t.");
    g.addVertex("JSVRG.");
    g.addVertex("T2Xo3/");
    g.addVertex("OktM0.");
    g.addVertex("Rixa11");
    g.addVertex("0EGIx.");
    g.addVertex("Lv7Rs0");
    g.addVertex("9tq4w0");
    g.addVertex("f9AMT0");
    g.addVertex("fTClr1");
    g.addVertex("weopB1");
    g.addVertex("YFpi91");
    g.addVertex("M.SVt/");
    g.addVertex("7FMiH0");
    g.addVertex("xtiJr1");
    g.addVertex("TLYcO1");
    g.addVertex("mdCGK0");
    g.addVertex("5kEOw0");
    g.addVertex("kX/yh1");
    g.addVertex("zfMKX.");
    g.addVertex("Lee1X1");
    g.addVertex("7eQu10");
    g.addVertex("ezoSh/");
    g.addVertex("rn5n90");
    g.addVertex("xKP770");
    g.addVertex("KOC3o0");
    g.addVertex("K9CUN.");
    g.addVertex("9VlBA/");
    g.addVertex("5xuNJ.");
    g.addVertex("vXGF4/");
    g.addVertex("GGB2y/");
    g.addVertex("rC/1U1");
    g.addVertex("u2.9r.");
    g.addVertex("0KqE71");
    g.addVertex("/7Ifg0");
    g.addVertex("5nbep0");
    g.addVertex("I1/tS0");
    g.addVertex("91TdJ/");
    g.addVertex("mIq5H1");
    g.addVertex("LX8QU/");
    g.addVertex("ZRiIN/");
    g.addVertex("c0wrC/");
    g.addVertex("8bPby/");
    g.addVertex("WDBqB1");
    g.addVertex("2A32y0");
    g.addVertex("eteG0/");
    g.addVertex("sLjLK1");
    g.addVertex("7mrQo1");
    g.addVertex("Fk3n//");
    g.addVertex("Gxc/O1");
    g.addVertex("Rtpx3.");
    g.addVertex("hFoQ7/");
    g.addVertex("nokkL1");
    g.addVertex("ErMpl1");
    g.addVertex("6BadW1");
    g.addVertex("QAHMh/");
    g.addVertex("QN6bB1");
    g.addVertex("dhd8f/");
    g.addVertex("gSlFB.");
    g.addVertex("BQxP71");
    g.addVertex("M9rcu.");
    g.addVertex("BaAUD/");
    g.addVertex("1spc61");
    g.addVertex("in2gN.");
    g.addVertex("CIfau0");
    g.addVertex("65B72/");
    g.addVertex("hPqxf/");
    g.addVertex("bE2IJ0");
    g.addVertex("FxrML1");
    g.addVertex("dy1ZC0");
    g.addVertex("YSl7e.");
    g.addVertex("4jYju.");
    g.addVertex("pbGxl1");
    g.addVertex("jzUkl0");
    g.addVertex("QAb1t.");
    g.addVertex("JSVRG.");
    g.addVertex("T2Xo3/");
    g.addVertex("OktM0.");
    g.addVertex("Rixa11");
    g.addVertex("0EGIx.");
    g.addVertex("Lv7Rs0");
    g.addVertex("9tq4w0");
    g.addVertex("f9AMT0");
    g.addVertex("fTClr1");
    g.addVertex("weopB1");
    g.addVertex("YFpi91");
    g.addVertex("M.SVt/");
    g.addVertex("7FMiH0");
    g.addVertex("xtiJr1");
    g.addVertex("TLYcO1");
    g.addVertex("mdCGK0");
    g.addVertex("5kEOw0");
    g.addVertex("kX/yh1");
    g.addVertex("zfMKX.");
    g.addVertex("Lee1X1");
    g.addVertex("7eQu10");
    g.addVertex("ezoSh/");
    g.addVertex("rn5n90");
    g.addVertex("xKP770");
    g.addVertex("KOC3o0");
    g.addVertex("K9CUN.");
    g.addVertex("9VlBA/");
    g.addVertex("5xuNJ.");
    g.addVertex("vXGF4/");
    g.addVertex("GGB2y/");
    g.addVertex("rC/1U1");
    g.addVertex("u2.9r.");
    g.addVertex("0KqE71");
    g.addVertex("/7Ifg0");
    g.addVertex("5nbep0");
    g.addVertex("I1/tS0");
    g.addVertex("91TdJ/");
    g.addVertex("mIq5H1");
    g.addVertex("LX8QU/");
    g.addVertex("ZRiIN/");
    g.addVertex("c0wrC/");
    g.addVertex("8bPby/");
    g.addVertex("WDBqB1");
    g.addVertex("2A32y0");
    g.addVertex("eteG0/");
    g.addVertex("sLjLK1");
    g.addVertex("7mrQo1");
    g.addVertex("wnx/I1");
    g.addVertex("ib54O/");
    g.addVertex("ALSlX0");
    g.addVertex("2wgJV/");
    g.addVertex("5P3V40");
    g.addVertex("X9TFg/");
    g.addVertex("qDD6q1");
    g.addVertex("7uFPP1");
    g.addVertex("b3rdx/");
    g.addVertex("Ug6Op.");
    g.addVertex("uhytF1");
    g.addVertex("rH.FI0");
    g.addVertex("FrdbL1");
    g.addVertex("3JU7C/");
    g.addVertex("uvR/1.");
    g.addVertex("xTfi5/");
    g.addVertex("g/dYq/");
    g.addVertex("cmUvt/");
    g.addVertex("NLgml.");
    g.addVertex("ErKXo1");
    g.addVertex("j4ZA40");
    g.addVertex("Jh4U20");
    g.addVertex("gNv8x/");
    g.addVertex(".ukfO1");
    g.addVertex("wJBLB/");
    g.addVertex("Hjkgx.");
    g.addVertex("5i9dx0");
    g.addVertex("2Fw9Q/");
    g.addVertex("pPBYM/");
    g.addVertex("kVmb00");
    g.addVertex("HvLde.");
    g.addVertex("Ad4Yy.");
    g.addVertex("IWJ940");
    g.addVertex("dPFW/.");
    g.addVertex("CArE71");
    g.addVertex("BWLGw.");
    g.addVertex("jfrxo/");
    g.addVertex("6YwLd/");
    g.addVertex("yO/lx0");
    g.addVertex("Wu.1s/");
    g.addVertex("GESN30");
    g.addVertex("Q9O55/");
    g.addVertex("z5Dks1");
    g.addVertex("Tu0oc0");
    g.addVertex("T3Y8g/");
    g.addVertex("icEdP0");
    g.addVertex("XiZCS0");
    g.addVertex("s/SvB0");
    g.addVertex(".Qr711");
    g.addVertex("6IeSu1");
    g.addVertex("Ye/h41");
    g.addVertex("dDq0K/");
    g.addVertex("qYCmZ.");
    g.addVertex("f5owe0");
    g.addVertex("cn71d/");
    g.addVertex("tkgmz0");
    g.addVertex("pHO6S.");
    g.addVertex("JFHEy1");
    g.addVertex("B4dFN.");
    g.addVertex("IoG/k/");
    g.addVertex("c1g9q.");
    g.addVertex("Rh2TC.");
    g.addVertex("YnxhY0");
    g.addVertex("f47Kz.");
    g.addVertex("MPagZ1");
    g.addVertex("vkCvl/");
    g.addVertex("xL0lu.");
    g.addVertex("1QXgc/");
    g.addVertex("Zmrrp/");
    g.addVertex("1YVtg0");
    g.addVertex("OB61G/");
    g.addVertex("Hakla/");
    g.addVertex("XKBE9/");
    g.addVertex("lyea10");
    g.addVertex("BguJS/");
    g.addVertex("Dj0Vl/");
    g.addVertex("vztaz.");
    g.addVertex("POt5z0");
    g.addVertex("hHnq4/");
    g.addVertex("yKTjF1");
    g.addVertex("2sQ6R.");
    g.addVertex("6EzQB1");
    g.addVertex("DgtKd.");
    g.addVertex("f3/1Q.");
    g.addVertex("z8vST0");
    g.addVertex("3zR4M1");
    g.addVertex("bqwTy.");
    g.addVertex("rLvAR1");
    g.addVertex("1Tqzh/");
    g.addVertex(".zidQ.");
    g.addVertex("oFoGW.");
    g.addVertex("OQ4a/1");
    g.addVertex("LFoxB.");
    g.addVertex("fhz6S0");
    g.addVertex("yWxue.");
    g.addVertex("xOVDc0");
    g.addVertex("FS.yF0");
    g.addVertex("/Eco41");
    g.addVertex("rV3FJ.");
    g.addVertex("Bc6c1.");
    g.addVertex("kW9JI.");
    g.addVertex("xyrLn1");
    g.addVertex("IyMuL0");
    g.addVertex("LYHXj.");
    g.addVertex("FK3SY0");
    g.addVertex("woVHj/");
    g.addVertex("CtFi7.");
    g.addVertex("apuMd0");
    g.addVertex("C6ff21");
    g.addVertex("wWCom/");
    g.addVertex("m5SoV0");
    g.addVertex("wHzzk.");
    g.addVertex("cWFkp/");
    g.addVertex("QKQ7w/");
    g.addVertex("VvmrT.");
    g.addVertex("virI9.");
    g.addVertex("KuS2a1");
    g.addVertex("FVl.I0");
    g.addVertex("oxqcl/");
    g.addVertex("KNgON1");
    g.addVertex("SSagv/");
    g.addVertex("b9zqb1");
    g.addVertex("Ypxkj1");
    g.addVertex("00fSS0");
    g.addVertex("Uwp3U0");
    g.addVertex("8w.OH/");
    g.addVertex("jNI9l0");
    g.addVertex("mb2nx0");
    g.addVertex("pWAIV0");
    g.addVertex("PyNse0");
    g.addVertex("FJd7K1");
    g.addVertex("2C3sq/");
    g.addVertex("2wvH7/");
    g.addVertex("jfrxo/");
    g.addVertex("QNdtC0");
    g.addVertex("0FnB2/");
    g.addVertex("1TADp/");
    g.addVertex("HjS55/");
    g.addVertex("qDwQY0");
    g.addVertex("xoyxx.");
    g.addVertex("36L.2.");
    g.addVertex("5fOe/0");
    g.addVertex("QCtD4.");
    g.addVertex("bOWMs.");
    g.addVertex("H5LYL/");
    g.addVertex("GxRjy/");
    g.addVertex("iA/NY/");
    g.addVertex("ll9Db/");
    g.addVertex("JEmzJ0");
    g.addVertex("/9F1Z/");
    g.addVertex("ab1I2/");
    g.addVertex("978IL/");
    g.addVertex("kokjC0");
    g.addVertex("dRkDW1");
    g.addVertex("TQ5we/");
    g.addVertex("csjuO.");
    g.addVertex("j6ZW70");
    g.addVertex("X6xPW0");
    g.addVertex("5QQXY0");
    g.addEdge("vkCvl/", "xL0lu.");
    g.addEdge("xL0lu.", "vkCvl/");
    g.addEdge("xL0lu.", "1QXgc/");
    g.addEdge("1QXgc/", "xL0lu.");
    g.addEdge("1QXgc/", "Zmrrp/");
    g.addEdge("Zmrrp/", "1QXgc/");
    g.addEdge("xL0lu.", "1YVtg0");
    g.addEdge("1YVtg0", "xL0lu.");
    g.addEdge("1YVtg0", "OB61G/");
    g.addEdge("OB61G/", "1YVtg0");
    g.addEdge("OB61G/", "Hakla/");
    g.addEdge("Hakla/", "OB61G/");
    g.addEdge("Hakla/", "XKBE9/");
    g.addEdge("XKBE9/", "Hakla/");
    g.addEdge("XKBE9/", "lyea10");
    g.addEdge("lyea10", "XKBE9/");
    g.addEdge("lyea10", "BguJS/");
    g.addEdge("BguJS/", "lyea10");
    g.addEdge("XKBE9/", "Dj0Vl/");
    g.addEdge("Dj0Vl/", "XKBE9/");
    g.addEdge("Dj0Vl/", "vztaz.");
    g.addEdge("vztaz.", "Dj0Vl/");
    g.addEdge("1YVtg0", "POt5z0");
    g.addEdge("POt5z0", "1YVtg0");
    g.addEdge("POt5z0", "hHnq4/");
    g.addEdge("hHnq4/", "POt5z0");
    g.addEdge("hHnq4/", "yKTjF1");
    g.addEdge("yKTjF1", "hHnq4/");
    g.addEdge("yKTjF1", "2sQ6R.");
    g.addEdge("2sQ6R.", "yKTjF1");
    g.addEdge("2sQ6R.", "6EzQB1");
    g.addEdge("6EzQB1", "2sQ6R.");
    g.addEdge("6EzQB1", "DgtKd.");
    g.addEdge("DgtKd.", "6EzQB1");
    g.addEdge("DgtKd.", "f3/1Q.");
    g.addEdge("f3/1Q.", "DgtKd.");
    g.addEdge("f3/1Q.", "z8vST0");
    g.addEdge("z8vST0", "f3/1Q.");
    g.addEdge("f3/1Q.", "3zR4M1");
    g.addEdge("3zR4M1", "f3/1Q.");
    g.addEdge("3zR4M1", "bqwTy.");
    g.addEdge("bqwTy.", "3zR4M1");
    g.addEdge("bqwTy.", "rLvAR1");
    g.addEdge("rLvAR1", "bqwTy.");
    g.addEdge("rLvAR1", "1Tqzh/");
    g.addEdge("1Tqzh/", "rLvAR1");
    g.addEdge("1Tqzh/", ".zidQ.");
    g.addEdge(".zidQ.", "1Tqzh/");
    g.addEdge(".zidQ.", "xL0lu.");
    g.addEdge("xL0lu.", ".zidQ.");
    g.addEdge(".zidQ.", "oFoGW.");
    g.addEdge("oFoGW.", ".zidQ.");
    g.addEdge("oFoGW.", "OQ4a/1");
    g.addEdge("OQ4a/1", "oFoGW.");
    g.addEdge("OQ4a/1", "LFoxB.");
    g.addEdge("LFoxB.", "OQ4a/1");
    g.addEdge("LFoxB.", "fhz6S0");
    g.addEdge("fhz6S0", "LFoxB.");
    g.addEdge("fhz6S0", "yWxue.");
    g.addEdge("yWxue.", "fhz6S0");
    g.addEdge("yWxue.", "xOVDc0");
    g.addEdge("xOVDc0", "yWxue.");
    g.addEdge("xOVDc0", "FS.yF0");
    g.addEdge("FS.yF0", "xOVDc0");
    g.addEdge("FS.yF0", "/Eco41");
    g.addEdge("/Eco41", "FS.yF0");
    g.addEdge("/Eco41", "rV3FJ.");
    g.addEdge("rV3FJ.", "/Eco41");
    g.addEdge("rV3FJ.", "Bc6c1.");
    g.addEdge("Bc6c1.", "rV3FJ.");
    g.addEdge("Bc6c1.", "kW9JI.");
    g.addEdge("kW9JI.", "Bc6c1.");
    g.addEdge("kW9JI.", "xyrLn1");
    g.addEdge("xyrLn1", "kW9JI.");
    g.addEdge("rLvAR1", "IyMuL0");
    g.addEdge("IyMuL0", "rLvAR1");
    g.addEdge("IyMuL0", "LYHXj.");
    g.addEdge("LYHXj.", "IyMuL0");
    g.addEdge("LYHXj.", "FK3SY0");
    g.addEdge("FK3SY0", "LYHXj.");
    g.addEdge("rLvAR1", "woVHj/");
    g.addEdge("woVHj/", "rLvAR1");
    g.addEdge("woVHj/", "CtFi7.");
    g.addEdge("CtFi7.", "woVHj/");
    g.addEdge("CtFi7.", "apuMd0");
    g.addEdge("apuMd0", "CtFi7.");
    g.addEdge("FK3SY0", "C6ff21");
    g.addEdge("C6ff21", "FK3SY0");
    g.addEdge("C6ff21", "wWCom/");
    g.addEdge("wWCom/", "C6ff21");
    g.addEdge("wWCom/", "m5SoV0");
    g.addEdge("m5SoV0", "wWCom/");
    g.addEdge("m5SoV0", "wHzzk.");
    g.addEdge("wHzzk.", "m5SoV0");
    g.addEdge("wWCom/", "cWFkp/");
    g.addEdge("cWFkp/", "wWCom/");
    g.addEdge("cWFkp/", "QKQ7w/");
    g.addEdge("QKQ7w/", "cWFkp/");
    g.addEdge("QKQ7w/", "VvmrT.");
    g.addEdge("VvmrT.", "QKQ7w/");
    g.addEdge("VvmrT.", "virI9.");
    g.addEdge("virI9.", "VvmrT.");
    g.addEdge("virI9.", "KuS2a1");
    g.addEdge("KuS2a1", "virI9.");
    g.addEdge("QKQ7w/", "FVl.I0");
    g.addEdge("FVl.I0", "QKQ7w/");
    g.addEdge("FVl.I0", "oxqcl/");
    g.addEdge("oxqcl/", "FVl.I0");
    g.addEdge("oxqcl/", "KNgON1");
    g.addEdge("KNgON1", "oxqcl/");
    g.addEdge("KNgON1", "SSagv/");
    g.addEdge("SSagv/", "KNgON1");
    g.addEdge("SSagv/", "b9zqb1");
    g.addEdge("b9zqb1", "SSagv/");
    g.addEdge("b9zqb1", "Ypxkj1");
    g.addEdge("Ypxkj1", "b9zqb1");
    g.addEdge("SSagv/", "00fSS0");
    g.addEdge("00fSS0", "SSagv/");
    g.addEdge("QKQ7w/", "Uwp3U0");
    g.addEdge("Uwp3U0", "QKQ7w/");
    g.addEdge("QKQ7w/", "8w.OH/");
    g.addEdge("8w.OH/", "QKQ7w/");
    g.addEdge("8w.OH/", "jNI9l0");
    g.addEdge("jNI9l0", "8w.OH/");
    g.addEdge("jNI9l0", "mb2nx0");
    g.addEdge("mb2nx0", "jNI9l0");
    g.addEdge("mb2nx0", "pWAIV0");
    g.addEdge("pWAIV0", "mb2nx0");
    g.addEdge("mb2nx0", "PyNse0");
    g.addEdge("PyNse0", "mb2nx0");
    g.addEdge("PyNse0", "FJd7K1");
    g.addEdge("FJd7K1", "PyNse0");
    g.addEdge("wWCom/", "2C3sq/");
    g.addEdge("2C3sq/", "wWCom/");
    g.addEdge("2C3sq/", "2wvH7/");
    g.addEdge("2wvH7/", "2C3sq/");
    g.addEdge("2C3sq/", "jfrxo/");
    g.addEdge("jfrxo/", "2C3sq/");
    g.addEdge("rH.FI0", "QNdtC0");
    g.addEdge("QNdtC0", "rH.FI0");
    g.addEdge("QNdtC0", "0FnB2/");
    g.addEdge("0FnB2/", "QNdtC0");
    g.addEdge("0FnB2/", "1TADp/");
    g.addEdge("1TADp/", "0FnB2/");
    g.addEdge("1TADp/", "HjS55/");
    g.addEdge("HjS55/", "1TADp/");
    g.addEdge("HjS55/", "qDwQY0");
    g.addEdge("qDwQY0", "HjS55/");
    g.addEdge("qDwQY0", "xoyxx.");
    g.addEdge("xoyxx.", "qDwQY0");
    g.addEdge("xoyxx.", "36L.2.");
    g.addEdge("36L.2.", "xoyxx.");
    g.addEdge("36L.2.", "5fOe/0");
    g.addEdge("5fOe/0", "36L.2.");
    g.addEdge("5fOe/0", "QCtD4.");
    g.addEdge("QCtD4.", "5fOe/0");
    g.addEdge("QCtD4.", "bOWMs.");
    g.addEdge("bOWMs.", "QCtD4.");
    g.addEdge("bOWMs.", "H5LYL/");
    g.addEdge("H5LYL/", "bOWMs.");
    g.addEdge("H5LYL/", "GxRjy/");
    g.addEdge("GxRjy/", "H5LYL/");
    g.addEdge("GxRjy/", "iA/NY/");
    g.addEdge("iA/NY/", "GxRjy/");
    g.addEdge("iA/NY/", "ll9Db/");
    g.addEdge("ll9Db/", "iA/NY/");
    g.addEdge("ll9Db/", "JEmzJ0");
    g.addEdge("JEmzJ0", "ll9Db/");
    g.addEdge("JEmzJ0", "/9F1Z/");
    g.addEdge("/9F1Z/", "JEmzJ0");
    g.addEdge("/9F1Z/", "ab1I2/");
    g.addEdge("ab1I2/", "/9F1Z/");
    g.addEdge("ab1I2/", "978IL/");
    g.addEdge("978IL/", "ab1I2/");
    g.addEdge("978IL/", "kokjC0");
    g.addEdge("kokjC0", "978IL/");
    g.addEdge("kokjC0", "dRkDW1");
    g.addEdge("dRkDW1", "kokjC0");
    g.addEdge("dRkDW1", "TQ5we/");
    g.addEdge("TQ5we/", "dRkDW1");
    g.addEdge("TQ5we/", "csjuO.");
    g.addEdge("csjuO.", "TQ5we/");
    g.addEdge("csjuO.", "j6ZW70");
    g.addEdge("j6ZW70", "csjuO.");
    g.addEdge("j6ZW70", "X6xPW0");
    g.addEdge("X6xPW0", "j6ZW70");
    g.addEdge("X6xPW0", "5QQXY0");
    g.addEdge("5QQXY0", "X6xPW0");
    g.addEdge("Fk3n//", "Gxc/O1");
    g.addEdge("Gxc/O1", "Fk3n//");
    g.addEdge("Gxc/O1", "Rtpx3.");
    g.addEdge("Rtpx3.", "Gxc/O1");
    g.addEdge("Gxc/O1", "hFoQ7/");
    g.addEdge("hFoQ7/", "Gxc/O1");
    g.addEdge("hFoQ7/", "nokkL1");
    g.addEdge("nokkL1", "hFoQ7/");
    g.addEdge("nokkL1", "ErMpl1");
    g.addEdge("ErMpl1", "nokkL1");
    g.addEdge("nokkL1", "6BadW1");
    g.addEdge("6BadW1", "nokkL1");
    g.addEdge("nokkL1", "QAHMh/");
    g.addEdge("QAHMh/", "nokkL1");
    g.addEdge("QAHMh/", "QN6bB1");
    g.addEdge("QN6bB1", "QAHMh/");
    g.addEdge("QN6bB1", "dhd8f/");
    g.addEdge("dhd8f/", "QN6bB1");
    g.addEdge("QN6bB1", "gSlFB.");
    g.addEdge("gSlFB.", "QN6bB1");
    g.addEdge("QN6bB1", "BQxP71");
    g.addEdge("BQxP71", "QN6bB1");
    g.addEdge("BQxP71", "M9rcu.");
    g.addEdge("M9rcu.", "BQxP71");
    g.addEdge("BQxP71", "BaAUD/");
    g.addEdge("BaAUD/", "BQxP71");
    g.addEdge("BaAUD/", "1spc61");
    g.addEdge("1spc61", "BaAUD/");
    g.addEdge("BaAUD/", "in2gN.");
    g.addEdge("in2gN.", "BaAUD/");
    g.addEdge("in2gN.", "CIfau0");
    g.addEdge("CIfau0", "in2gN.");
    g.addEdge("CIfau0", "65B72/");
    g.addEdge("65B72/", "CIfau0");
    g.addEdge("65B72/", "hPqxf/");
    g.addEdge("hPqxf/", "65B72/");
    g.addEdge("hPqxf/", "bE2IJ0");
    g.addEdge("bE2IJ0", "hPqxf/");
    g.addEdge("bE2IJ0", "FxrML1");
    g.addEdge("FxrML1", "bE2IJ0");
    g.addEdge("FxrML1", "dy1ZC0");
    g.addEdge("dy1ZC0", "FxrML1");
    g.addEdge("FxrML1", "YSl7e.");
    g.addEdge("YSl7e.", "FxrML1");
    g.addEdge("YSl7e.", "4jYju.");
    g.addEdge("4jYju.", "YSl7e.");
    g.addEdge("YSl7e.", "pbGxl1");
    g.addEdge("pbGxl1", "YSl7e.");
    g.addEdge("pbGxl1", "jzUkl0");
    g.addEdge("jzUkl0", "pbGxl1");
    g.addEdge("jzUkl0", "QAb1t.");
    g.addEdge("QAb1t.", "jzUkl0");
    g.addEdge("QAb1t.", "JSVRG.");
    g.addEdge("JSVRG.", "QAb1t.");
    g.addEdge("JSVRG.", "T2Xo3/");
    g.addEdge("T2Xo3/", "JSVRG.");
    g.addEdge("T2Xo3/", "OktM0.");
    g.addEdge("OktM0.", "T2Xo3/");
    g.addEdge("T2Xo3/", "Rixa11");
    g.addEdge("Rixa11", "T2Xo3/");
    g.addEdge("Rixa11", "0EGIx.");
    g.addEdge("0EGIx.", "Rixa11");
    g.addEdge("0EGIx.", "Lv7Rs0");
    g.addEdge("Lv7Rs0", "0EGIx.");
    g.addEdge("Lv7Rs0", "9tq4w0");
    g.addEdge("9tq4w0", "Lv7Rs0");
    g.addEdge("9tq4w0", "f9AMT0");
    g.addEdge("f9AMT0", "9tq4w0");
    g.addEdge("f9AMT0", "fTClr1");
    g.addEdge("fTClr1", "f9AMT0");
    g.addEdge("fTClr1", "weopB1");
    g.addEdge("weopB1", "fTClr1");
    g.addEdge("fTClr1", "YFpi91");
    g.addEdge("YFpi91", "fTClr1");
    g.addEdge("fTClr1", "BaAUD/");
    g.addEdge("BaAUD/", "fTClr1");
    g.addEdge("9tq4w0", "M.SVt/");
    g.addEdge("M.SVt/", "9tq4w0");
    g.addEdge("M.SVt/", "7FMiH0");
    g.addEdge("7FMiH0", "M.SVt/");
    g.addEdge("7FMiH0", "xtiJr1");
    g.addEdge("xtiJr1", "7FMiH0");
    g.addEdge("xtiJr1", "TLYcO1");
    g.addEdge("TLYcO1", "xtiJr1");
    g.addEdge("TLYcO1", "mdCGK0");
    g.addEdge("mdCGK0", "TLYcO1");
    g.addEdge("mdCGK0", "5kEOw0");
    g.addEdge("5kEOw0", "mdCGK0");
    g.addEdge("5kEOw0", "kX/yh1");
    g.addEdge("kX/yh1", "5kEOw0");
    g.addEdge("kX/yh1", "zfMKX.");
    g.addEdge("zfMKX.", "kX/yh1");
    g.addEdge("kX/yh1", "Lee1X1");
    g.addEdge("Lee1X1", "kX/yh1");
    g.addEdge("5kEOw0", "7eQu10");
    g.addEdge("7eQu10", "5kEOw0");
    g.addEdge("7eQu10", "ezoSh/");
    g.addEdge("ezoSh/", "7eQu10");
    g.addEdge("ezoSh/", "rn5n90");
    g.addEdge("rn5n90", "ezoSh/");
    g.addEdge("rn5n90", "xKP770");
    g.addEdge("xKP770", "rn5n90");
    g.addEdge("xKP770", "KOC3o0");
    g.addEdge("KOC3o0", "xKP770");
    g.addEdge("KOC3o0", "K9CUN.");
    g.addEdge("K9CUN.", "KOC3o0");
    g.addEdge("K9CUN.", "9VlBA/");
    g.addEdge("9VlBA/", "K9CUN.");
    g.addEdge("9VlBA/", "5xuNJ.");
    g.addEdge("5xuNJ.", "9VlBA/");
    g.addEdge("9VlBA/", "vXGF4/");
    g.addEdge("vXGF4/", "9VlBA/");
    g.addEdge("vXGF4/", "GGB2y/");
    g.addEdge("GGB2y/", "vXGF4/");
    g.addEdge("KOC3o0", "rC/1U1");
    g.addEdge("rC/1U1", "KOC3o0");
    g.addEdge("rC/1U1", "u2.9r.");
    g.addEdge("u2.9r.", "rC/1U1");
    g.addEdge("u2.9r.", "0KqE71");
    g.addEdge("0KqE71", "u2.9r.");
    g.addEdge("0KqE71", "/7Ifg0");
    g.addEdge("/7Ifg0", "0KqE71");
    g.addEdge("/7Ifg0", "5nbep0");
    g.addEdge("5nbep0", "/7Ifg0");
    g.addEdge("5nbep0", "I1/tS0");
    g.addEdge("I1/tS0", "5nbep0");
    g.addEdge("I1/tS0", "91TdJ/");
    g.addEdge("91TdJ/", "I1/tS0");
    g.addEdge("I1/tS0", "mIq5H1");
    g.addEdge("mIq5H1", "I1/tS0");
    g.addEdge("/7Ifg0", "LX8QU/");
    g.addEdge("LX8QU/", "/7Ifg0");
    g.addEdge("LX8QU/", "ZRiIN/");
    g.addEdge("ZRiIN/", "LX8QU/");
    g.addEdge("ZRiIN/", "c0wrC/");
    g.addEdge("c0wrC/", "ZRiIN/");
    g.addEdge("c0wrC/", "8bPby/");
    g.addEdge("8bPby/", "c0wrC/");
    g.addEdge("8bPby/", "WDBqB1");
    g.addEdge("WDBqB1", "8bPby/");
    g.addEdge("8bPby/", "2A32y0");
    g.addEdge("2A32y0", "8bPby/");
    g.addEdge("LX8QU/", "eteG0/");
    g.addEdge("eteG0/", "LX8QU/");
    g.addEdge("eteG0/", "sLjLK1");
    g.addEdge("sLjLK1", "eteG0/");
    g.addEdge("sLjLK1", "7mrQo1");
    g.addEdge("7mrQo1", "sLjLK1");
    g.addEdge("7mrQo1", "QAb1t.");
    g.addEdge("QAb1t.", "7mrQo1");
    g.addEdge("wnx/I1", "ib54O/");
    g.addEdge("ib54O/", "wnx/I1");
    g.addEdge("wnx/I1", "ALSlX0");
    g.addEdge("ALSlX0", "wnx/I1");
    g.addEdge("ALSlX0", "2wgJV/");
    g.addEdge("2wgJV/", "ALSlX0");
    g.addEdge("ib54O/", "5P3V40");
    g.addEdge("5P3V40", "ib54O/");
    g.addEdge("wnx/I1", "X9TFg/");
    g.addEdge("X9TFg/", "wnx/I1");
    g.addEdge("X9TFg/", "qDD6q1");
    g.addEdge("qDD6q1", "X9TFg/");
    g.addEdge("qDD6q1", "7uFPP1");
    g.addEdge("7uFPP1", "qDD6q1");
    g.addEdge("7uFPP1", "b3rdx/");
    g.addEdge("b3rdx/", "7uFPP1");
    g.addEdge("b3rdx/", "Ug6Op.");
    g.addEdge("Ug6Op.", "b3rdx/");
    g.addEdge("Ug6Op.", "uhytF1");
    g.addEdge("uhytF1", "Ug6Op.");
    g.addEdge("rH.FI0", "FrdbL1");
    g.addEdge("FrdbL1", "rH.FI0");
    g.addEdge("FrdbL1", "3JU7C/");
    g.addEdge("3JU7C/", "FrdbL1");
    g.addEdge("3JU7C/", "uvR/1.");
    g.addEdge("uvR/1.", "3JU7C/");
    g.addEdge("uvR/1.", "xTfi5/");
    g.addEdge("xTfi5/", "uvR/1.");
    g.addEdge("xTfi5/", "g/dYq/");
    g.addEdge("g/dYq/", "xTfi5/");
    g.addEdge("xTfi5/", "cmUvt/");
    g.addEdge("cmUvt/", "xTfi5/");
    g.addEdge("cmUvt/", "NLgml.");
    g.addEdge("NLgml.", "cmUvt/");
    g.addEdge("xTfi5/", "ErKXo1");
    g.addEdge("ErKXo1", "xTfi5/");
    g.addEdge("ErKXo1", "j4ZA40");
    g.addEdge("j4ZA40", "ErKXo1");
    g.addEdge("j4ZA40", "Jh4U20");
    g.addEdge("Jh4U20", "j4ZA40");
    g.addEdge("Jh4U20", "gNv8x/");
    g.addEdge("gNv8x/", "Jh4U20");
    g.addEdge("gNv8x/", ".ukfO1");
    g.addEdge(".ukfO1", "gNv8x/");
    g.addEdge(".ukfO1", "wJBLB/");
    g.addEdge("wJBLB/", ".ukfO1");
    g.addEdge("wJBLB/", "Hjkgx.");
    g.addEdge("Hjkgx.", "wJBLB/");
    g.addEdge("gNv8x/", "5i9dx0");
    g.addEdge("5i9dx0", "gNv8x/");
    g.addEdge("5i9dx0", "2Fw9Q/");
    g.addEdge("2Fw9Q/", "5i9dx0");
    g.addEdge("2Fw9Q/", "pPBYM/");
    g.addEdge("pPBYM/", "2Fw9Q/");
    g.addEdge("pPBYM/", "kVmb00");
    g.addEdge("kVmb00", "pPBYM/");
    g.addEdge("kVmb00", "HvLde.");
    g.addEdge("HvLde.", "kVmb00");
    g.addEdge("HvLde.", "Ad4Yy.");
    g.addEdge("Ad4Yy.", "HvLde.");
    g.addEdge("Ad4Yy.", "IWJ940");
    g.addEdge("IWJ940", "Ad4Yy.");
    g.addEdge("Ad4Yy.", "dPFW/.");
    g.addEdge("dPFW/.", "Ad4Yy.");
    g.addEdge("2Fw9Q/", "CArE71");
    g.addEdge("CArE71", "2Fw9Q/");
    g.addEdge("CArE71", "BWLGw.");
    g.addEdge("BWLGw.", "CArE71");
    g.addEdge("BWLGw.", "jfrxo/");
    g.addEdge("jfrxo/", "BWLGw.");
    g.addEdge("BWLGw.", "6YwLd/");
    g.addEdge("6YwLd/", "BWLGw.");
    g.addEdge("6YwLd/", "3JU7C/");
    g.addEdge("3JU7C/", "6YwLd/");
    g.addEdge("6YwLd/", "yO/lx0");
    g.addEdge("yO/lx0", "6YwLd/");
    g.addEdge("yO/lx0", "Wu.1s/");
    g.addEdge("Wu.1s/", "yO/lx0");
    g.addEdge("pPBYM/", "GESN30");
    g.addEdge("GESN30", "pPBYM/");
    g.addEdge("GESN30", "Q9O55/");
    g.addEdge("Q9O55/", "GESN30");
    g.addEdge("Q9O55/", "z5Dks1");
    g.addEdge("z5Dks1", "Q9O55/");
    g.addEdge("z5Dks1", "HvLde.");
    g.addEdge("HvLde.", "z5Dks1");
    g.addEdge("GESN30", "Tu0oc0");
    g.addEdge("Tu0oc0", "GESN30");
    g.addEdge("Tu0oc0", "T3Y8g/");
    g.addEdge("T3Y8g/", "Tu0oc0");
    g.addEdge("T3Y8g/", "icEdP0");
    g.addEdge("icEdP0", "T3Y8g/");
    g.addEdge("icEdP0", "XiZCS0");
    g.addEdge("XiZCS0", "icEdP0");
    g.addEdge("XiZCS0", "s/SvB0");
    g.addEdge("s/SvB0", "XiZCS0");
    g.addEdge("s/SvB0", "2Fw9Q/");
    g.addEdge("2Fw9Q/", "s/SvB0");
    g.addEdge("5i9dx0", ".Qr711");
    g.addEdge(".Qr711", "5i9dx0");
    g.addEdge(".Qr711", "6IeSu1");
    g.addEdge("6IeSu1", ".Qr711");
    g.addEdge("6IeSu1", "Ye/h41");
    g.addEdge("Ye/h41", "6IeSu1");
    g.addEdge("Ye/h41", "dDq0K/");
    g.addEdge("dDq0K/", "Ye/h41");
    g.addEdge("Ye/h41", "icEdP0");
    g.addEdge("icEdP0", "Ye/h41");
    g.addEdge("Ye/h41", "qYCmZ.");
    g.addEdge("qYCmZ.", "Ye/h41");
    g.addEdge("qYCmZ.", "f5owe0");
    g.addEdge("f5owe0", "qYCmZ.");
    g.addEdge("icEdP0", "cn71d/");
    g.addEdge("cn71d/", "icEdP0");
    g.addEdge("cn71d/", "tkgmz0");
    g.addEdge("tkgmz0", "cn71d/");
    g.addEdge("tkgmz0", "pHO6S.");
    g.addEdge("pHO6S.", "tkgmz0");
    g.addEdge("T3Y8g/", "JFHEy1");
    g.addEdge("JFHEy1", "T3Y8g/");
    g.addEdge("JFHEy1", "B4dFN.");
    g.addEdge("B4dFN.", "JFHEy1");
    g.addEdge("B4dFN.", "IoG/k/");
    g.addEdge("IoG/k/", "B4dFN.");
    g.addEdge("IoG/k/", "c1g9q.");
    g.addEdge("c1g9q.", "IoG/k/");
    g.addEdge("IoG/k/", "Rh2TC.");
    g.addEdge("Rh2TC.", "IoG/k/");
    g.addEdge("Rh2TC.", "YnxhY0");
    g.addEdge("YnxhY0", "Rh2TC.");
    g.addEdge("YnxhY0", "f47Kz.");
    g.addEdge("f47Kz.", "YnxhY0");
    g.addEdge("f47Kz.", "MPagZ1");
    g.addEdge("MPagZ1", "f47Kz.");
    g.addEdge("Fk3n//", "Gxc/O1");
    g.addEdge("Gxc/O1", "Fk3n//");
    g.addEdge("Gxc/O1", "Rtpx3.");
    g.addEdge("Rtpx3.", "Gxc/O1");
    g.addEdge("Gxc/O1", "hFoQ7/");
    g.addEdge("hFoQ7/", "Gxc/O1");
    g.addEdge("hFoQ7/", "nokkL1");
    g.addEdge("nokkL1", "hFoQ7/");
    g.addEdge("nokkL1", "ErMpl1");
    g.addEdge("ErMpl1", "nokkL1");
    g.addEdge("nokkL1", "6BadW1");
    g.addEdge("6BadW1", "nokkL1");
    g.addEdge("nokkL1", "QAHMh/");
    g.addEdge("QAHMh/", "nokkL1");
    g.addEdge("QAHMh/", "QN6bB1");
    g.addEdge("QN6bB1", "QAHMh/");
    g.addEdge("QN6bB1", "dhd8f/");
    g.addEdge("dhd8f/", "QN6bB1");
    g.addEdge("QN6bB1", "gSlFB.");
    g.addEdge("gSlFB.", "QN6bB1");
    g.addEdge("QN6bB1", "BQxP71");
    g.addEdge("BQxP71", "QN6bB1");
    g.addEdge("BQxP71", "M9rcu.");
    g.addEdge("M9rcu.", "BQxP71");
    g.addEdge("BQxP71", "BaAUD/");
    g.addEdge("BaAUD/", "BQxP71");
    g.addEdge("BaAUD/", "1spc61");
    g.addEdge("1spc61", "BaAUD/");
    g.addEdge("BaAUD/", "in2gN.");
    g.addEdge("in2gN.", "BaAUD/");
    g.addEdge("in2gN.", "CIfau0");
    g.addEdge("CIfau0", "in2gN.");
    g.addEdge("CIfau0", "65B72/");
    g.addEdge("65B72/", "CIfau0");
    g.addEdge("65B72/", "hPqxf/");
    g.addEdge("hPqxf/", "65B72/");
    g.addEdge("hPqxf/", "bE2IJ0");
    g.addEdge("bE2IJ0", "hPqxf/");
    g.addEdge("bE2IJ0", "FxrML1");
    g.addEdge("FxrML1", "bE2IJ0");
    g.addEdge("FxrML1", "dy1ZC0");
    g.addEdge("dy1ZC0", "FxrML1");
    g.addEdge("FxrML1", "YSl7e.");
    g.addEdge("YSl7e.", "FxrML1");
    g.addEdge("YSl7e.", "4jYju.");
    g.addEdge("4jYju.", "YSl7e.");
    g.addEdge("YSl7e.", "pbGxl1");
    g.addEdge("pbGxl1", "YSl7e.");
    g.addEdge("pbGxl1", "jzUkl0");
    g.addEdge("jzUkl0", "pbGxl1");
    g.addEdge("jzUkl0", "QAb1t.");
    g.addEdge("QAb1t.", "jzUkl0");
    g.addEdge("QAb1t.", "JSVRG.");
    g.addEdge("JSVRG.", "QAb1t.");
    g.addEdge("JSVRG.", "T2Xo3/");
    g.addEdge("T2Xo3/", "JSVRG.");
    g.addEdge("T2Xo3/", "OktM0.");
    g.addEdge("OktM0.", "T2Xo3/");
    g.addEdge("T2Xo3/", "Rixa11");
    g.addEdge("Rixa11", "T2Xo3/");
    g.addEdge("Rixa11", "0EGIx.");
    g.addEdge("0EGIx.", "Rixa11");
    g.addEdge("0EGIx.", "Lv7Rs0");
    g.addEdge("Lv7Rs0", "0EGIx.");
    g.addEdge("Lv7Rs0", "9tq4w0");
    g.addEdge("9tq4w0", "Lv7Rs0");
    g.addEdge("9tq4w0", "f9AMT0");
    g.addEdge("f9AMT0", "9tq4w0");
    g.addEdge("f9AMT0", "fTClr1");
    g.addEdge("fTClr1", "f9AMT0");
    g.addEdge("fTClr1", "weopB1");
    g.addEdge("weopB1", "fTClr1");
    g.addEdge("fTClr1", "YFpi91");
    g.addEdge("YFpi91", "fTClr1");
    g.addEdge("fTClr1", "BaAUD/");
    g.addEdge("BaAUD/", "fTClr1");
    g.addEdge("9tq4w0", "M.SVt/");
    g.addEdge("M.SVt/", "9tq4w0");
    g.addEdge("M.SVt/", "7FMiH0");
    g.addEdge("7FMiH0", "M.SVt/");
    g.addEdge("7FMiH0", "xtiJr1");
    g.addEdge("xtiJr1", "7FMiH0");
    g.addEdge("xtiJr1", "TLYcO1");
    g.addEdge("TLYcO1", "xtiJr1");
    g.addEdge("TLYcO1", "mdCGK0");
    g.addEdge("mdCGK0", "TLYcO1");
    g.addEdge("mdCGK0", "5kEOw0");
    g.addEdge("5kEOw0", "mdCGK0");
    g.addEdge("5kEOw0", "kX/yh1");
    g.addEdge("kX/yh1", "5kEOw0");
    g.addEdge("kX/yh1", "zfMKX.");
    g.addEdge("zfMKX.", "kX/yh1");
    g.addEdge("kX/yh1", "Lee1X1");
    g.addEdge("Lee1X1", "kX/yh1");
    g.addEdge("5kEOw0", "7eQu10");
    g.addEdge("7eQu10", "5kEOw0");
    g.addEdge("7eQu10", "ezoSh/");
    g.addEdge("ezoSh/", "7eQu10");
    g.addEdge("ezoSh/", "rn5n90");
    g.addEdge("rn5n90", "ezoSh/");
    g.addEdge("rn5n90", "xKP770");
    g.addEdge("xKP770", "rn5n90");
    g.addEdge("xKP770", "KOC3o0");
    g.addEdge("KOC3o0", "xKP770");
    g.addEdge("KOC3o0", "K9CUN.");
    g.addEdge("K9CUN.", "KOC3o0");
    g.addEdge("K9CUN.", "9VlBA/");
    g.addEdge("9VlBA/", "K9CUN.");
    g.addEdge("9VlBA/", "5xuNJ.");
    g.addEdge("5xuNJ.", "9VlBA/");
    g.addEdge("9VlBA/", "vXGF4/");
    g.addEdge("vXGF4/", "9VlBA/");
    g.addEdge("vXGF4/", "GGB2y/");
    g.addEdge("GGB2y/", "vXGF4/");
    g.addEdge("KOC3o0", "rC/1U1");
    g.addEdge("rC/1U1", "KOC3o0");
    g.addEdge("rC/1U1", "u2.9r.");
    g.addEdge("u2.9r.", "rC/1U1");
    g.addEdge("u2.9r.", "0KqE71");
    g.addEdge("0KqE71", "u2.9r.");
    g.addEdge("0KqE71", "/7Ifg0");
    g.addEdge("/7Ifg0", "0KqE71");
    g.addEdge("/7Ifg0", "5nbep0");
    g.addEdge("5nbep0", "/7Ifg0");
    g.addEdge("5nbep0", "I1/tS0");
    g.addEdge("I1/tS0", "5nbep0");
    g.addEdge("I1/tS0", "91TdJ/");
    g.addEdge("91TdJ/", "I1/tS0");
    g.addEdge("I1/tS0", "mIq5H1");
    g.addEdge("mIq5H1", "I1/tS0");
    g.addEdge("/7Ifg0", "LX8QU/");
    g.addEdge("LX8QU/", "/7Ifg0");
    g.addEdge("LX8QU/", "ZRiIN/");
    g.addEdge("ZRiIN/", "LX8QU/");
    g.addEdge("ZRiIN/", "c0wrC/");
    g.addEdge("c0wrC/", "ZRiIN/");
    g.addEdge("c0wrC/", "8bPby/");
    g.addEdge("8bPby/", "c0wrC/");
    g.addEdge("8bPby/", "WDBqB1");
    g.addEdge("WDBqB1", "8bPby/");
    g.addEdge("8bPby/", "2A32y0");
    g.addEdge("2A32y0", "8bPby/");
    g.addEdge("LX8QU/", "eteG0/");
    g.addEdge("eteG0/", "LX8QU/");
    g.addEdge("eteG0/", "sLjLK1");
    g.addEdge("sLjLK1", "eteG0/");
    g.addEdge("sLjLK1", "7mrQo1");
    g.addEdge("7mrQo1", "sLjLK1");
    g.addEdge("7mrQo1", "QAb1t.");
    g.addEdge("QAb1t.", "7mrQo1");

    var directions = {
        "Fk3n//-Gxc/O1": "sw",
        "Gxc/O1-Fk3n//": "ne",
        "Gxc/O1-Rtpx3.": "nw",
        "Rtpx3.-Gxc/O1": "se",
        "Gxc/O1-hFoQ7/": "s",
        "hFoQ7/-Gxc/O1": "n",
        "hFoQ7/-nokkL1": "s",
        "nokkL1-hFoQ7/": "n",
        "nokkL1-ErMpl1": "e",
        "ErMpl1-nokkL1": "w",
        "nokkL1-6BadW1": "w",
        "6BadW1-nokkL1": "e",
        "nokkL1-QAHMh/": "sw",
        "QAHMh/-nokkL1": "ne",
        "QAHMh/-QN6bB1": "sw",
        "QN6bB1-QAHMh/": "ne",
        "QN6bB1-dhd8f/": "se",
        "dhd8f/-QN6bB1": "nw",
        "QN6bB1-gSlFB.": "n",
        "gSlFB.-QN6bB1": "s",
        "QN6bB1-BQxP71": "w",
        "BQxP71-QN6bB1": "e",
        "BQxP71-M9rcu.": "s",
        "M9rcu.-BQxP71": "n",
        "BQxP71-BaAUD/": "w",
        "BaAUD/-BQxP71": "e",
        "BaAUD/-1spc61": "ne",
        "1spc61-BaAUD/": "sw",
        "BaAUD/-in2gN.": "s",
        "in2gN.-BaAUD/": "n",
        "in2gN.-CIfau0": "w",
        "CIfau0-in2gN.": "e",
        "CIfau0-65B72/": "w",
        "65B72/-CIfau0": "e",
        "65B72/-hPqxf/": "w",
        "hPqxf/-65B72/": "e",
        "hPqxf/-bE2IJ0": "sw",
        "bE2IJ0-hPqxf/": "ne",
        "bE2IJ0-FxrML1": "w",
        "FxrML1-bE2IJ0": "e",
        "FxrML1-dy1ZC0": "nw",
        "dy1ZC0-FxrML1": "se",
        "FxrML1-YSl7e.": "w",
        "YSl7e.-FxrML1": "e",
        "YSl7e.-4jYju.": "nw",
        "4jYju.-YSl7e.": "se",
        "YSl7e.-pbGxl1": "w",
        "pbGxl1-YSl7e.": "e",
        "pbGxl1-jzUkl0": "nw",
        "jzUkl0-pbGxl1": "se",
        "jzUkl0-QAb1t.": "ne",
        "QAb1t.-jzUkl0": "sw",
        "QAb1t.-JSVRG.": "e",
        "JSVRG.-QAb1t.": "w",
        "JSVRG.-T2Xo3/": "e",
        "T2Xo3/-JSVRG.": "w",
        "T2Xo3/-OktM0.": "s",
        "OktM0.-T2Xo3/": "n",
        "T2Xo3/-Rixa11": "n",
        "Rixa11-T2Xo3/": "s",
        "Rixa11-0EGIx.": "ne",
        "0EGIx.-Rixa11": "sw",
        "0EGIx.-Lv7Rs0": "ne",
        "Lv7Rs0-0EGIx.": "sw",
        "Lv7Rs0-9tq4w0": "e",
        "9tq4w0-Lv7Rs0": "w",
        "9tq4w0-f9AMT0": "s",
        "f9AMT0-9tq4w0": "n",
        "f9AMT0-fTClr1": "se",
        "fTClr1-f9AMT0": "nw",
        "fTClr1-weopB1": "ne",
        "weopB1-fTClr1": "sw",
        "fTClr1-YFpi91": "sw",
        "YFpi91-fTClr1": "ne",
        "fTClr1-BaAUD/": "se",
        "BaAUD/-fTClr1": "nw",
        "9tq4w0-M.SVt/": "e",
        "M.SVt/-9tq4w0": "w",
        "M.SVt/-7FMiH0": "ne",
        "7FMiH0-M.SVt/": "sw",
        "7FMiH0-xtiJr1": "ne",
        "xtiJr1-7FMiH0": "sw",
        "xtiJr1-TLYcO1": "n",
        "TLYcO1-xtiJr1": "s",
        "TLYcO1-mdCGK0": "n",
        "mdCGK0-TLYcO1": "s",
        "mdCGK0-5kEOw0": "nw",
        "5kEOw0-mdCGK0": "se",
        "5kEOw0-kX/yh1": "n",
        "kX/yh1-5kEOw0": "s",
        "kX/yh1-zfMKX.": "nw",
        "zfMKX.-kX/yh1": "se",
        "kX/yh1-Lee1X1": "ne",
        "Lee1X1-kX/yh1": "sw",
        "5kEOw0-7eQu10": "nw",
        "7eQu10-5kEOw0": "se",
        "7eQu10-ezoSh/": "w",
        "ezoSh/-7eQu10": "e",
        "ezoSh/-rn5n90": "w",
        "rn5n90-ezoSh/": "e",
        "rn5n90-xKP770": "sw",
        "xKP770-rn5n90": "ne",
        "xKP770-KOC3o0": "s",
        "KOC3o0-xKP770": "n",
        "KOC3o0-K9CUN.": "se",
        "K9CUN.-KOC3o0": "nw",
        "K9CUN.-9VlBA/": "ne",
        "9VlBA/-K9CUN.": "sw",
        "9VlBA/-5xuNJ.": "n",
        "5xuNJ.-9VlBA/": "s",
        "9VlBA/-vXGF4/": "s",
        "vXGF4/-9VlBA/": "n",
        "vXGF4/-GGB2y/": "se",
        "GGB2y/-vXGF4/": "nw",
        "KOC3o0-rC/1U1": "s",
        "rC/1U1-KOC3o0": "n",
        "rC/1U1-u2.9r.": "w",
        "u2.9r.-rC/1U1": "e",
        "u2.9r.-0KqE71": "w",
        "0KqE71-u2.9r.": "e",
        "0KqE71-/7Ifg0": "sw",
        "/7Ifg0-0KqE71": "ne",
        "/7Ifg0-5nbep0": "se",
        "5nbep0-/7Ifg0": "nw",
        "5nbep0-I1/tS0": "e",
        "I1/tS0-5nbep0": "w",
        "I1/tS0-91TdJ/": "ne",
        "91TdJ/-I1/tS0": "sw",
        "I1/tS0-mIq5H1": "se",
        "mIq5H1-I1/tS0": "nw",
        "/7Ifg0-LX8QU/": "sw",
        "LX8QU/-/7Ifg0": "ne",
        "LX8QU/-ZRiIN/": "nw",
        "ZRiIN/-LX8QU/": "se",
        "ZRiIN/-c0wrC/": "ne",
        "c0wrC/-ZRiIN/": "sw",
        "c0wrC/-8bPby/": "ne",
        "8bPby/-c0wrC/": "sw",
        "8bPby/-WDBqB1": "e",
        "WDBqB1-8bPby/": "w",
        "8bPby/-2A32y0": "nw",
        "2A32y0-8bPby/": "se",
        "LX8QU/-eteG0/": "s",
        "eteG0/-LX8QU/": "n",
        "eteG0/-sLjLK1": "s",
        "sLjLK1-eteG0/": "n",
        "sLjLK1-7mrQo1": "se",
        "7mrQo1-sLjLK1": "nw",
        "7mrQo1-QAb1t.": "s",
        "QAb1t.-7mrQo1": "n",
        "Fk3n//-Gxc/O1": "sw",
        "Gxc/O1-Fk3n//": "ne",
        "Gxc/O1-Rtpx3.": "nw",
        "Rtpx3.-Gxc/O1": "se",
        "Gxc/O1-hFoQ7/": "s",
        "hFoQ7/-Gxc/O1": "n",
        "hFoQ7/-nokkL1": "s",
        "nokkL1-hFoQ7/": "n",
        "nokkL1-ErMpl1": "e",
        "ErMpl1-nokkL1": "w",
        "nokkL1-6BadW1": "w",
        "6BadW1-nokkL1": "e",
        "nokkL1-QAHMh/": "sw",
        "QAHMh/-nokkL1": "ne",
        "QAHMh/-QN6bB1": "sw",
        "QN6bB1-QAHMh/": "ne",
        "QN6bB1-dhd8f/": "se",
        "dhd8f/-QN6bB1": "nw",
        "QN6bB1-gSlFB.": "n",
        "gSlFB.-QN6bB1": "s",
        "QN6bB1-BQxP71": "w",
        "BQxP71-QN6bB1": "e",
        "BQxP71-M9rcu.": "s",
        "M9rcu.-BQxP71": "n",
        "BQxP71-BaAUD/": "w",
        "BaAUD/-BQxP71": "e",
        "BaAUD/-1spc61": "ne",
        "1spc61-BaAUD/": "sw",
        "BaAUD/-in2gN.": "s",
        "in2gN.-BaAUD/": "n",
        "in2gN.-CIfau0": "w",
        "CIfau0-in2gN.": "e",
        "CIfau0-65B72/": "w",
        "65B72/-CIfau0": "e",
        "65B72/-hPqxf/": "w",
        "hPqxf/-65B72/": "e",
        "hPqxf/-bE2IJ0": "sw",
        "bE2IJ0-hPqxf/": "ne",
        "bE2IJ0-FxrML1": "w",
        "FxrML1-bE2IJ0": "e",
        "FxrML1-dy1ZC0": "nw",
        "dy1ZC0-FxrML1": "se",
        "FxrML1-YSl7e.": "w",
        "YSl7e.-FxrML1": "e",
        "YSl7e.-4jYju.": "nw",
        "4jYju.-YSl7e.": "se",
        "YSl7e.-pbGxl1": "w",
        "pbGxl1-YSl7e.": "e",
        "pbGxl1-jzUkl0": "nw",
        "jzUkl0-pbGxl1": "se",
        "jzUkl0-QAb1t.": "ne",
        "QAb1t.-jzUkl0": "sw",
        "QAb1t.-JSVRG.": "e",
        "JSVRG.-QAb1t.": "w",
        "JSVRG.-T2Xo3/": "e",
        "T2Xo3/-JSVRG.": "w",
        "T2Xo3/-OktM0.": "s",
        "OktM0.-T2Xo3/": "n",
        "T2Xo3/-Rixa11": "n",
        "Rixa11-T2Xo3/": "s",
        "Rixa11-0EGIx.": "ne",
        "0EGIx.-Rixa11": "sw",
        "0EGIx.-Lv7Rs0": "ne",
        "Lv7Rs0-0EGIx.": "sw",
        "Lv7Rs0-9tq4w0": "e",
        "9tq4w0-Lv7Rs0": "w",
        "9tq4w0-f9AMT0": "s",
        "f9AMT0-9tq4w0": "n",
        "f9AMT0-fTClr1": "se",
        "fTClr1-f9AMT0": "nw",
        "fTClr1-weopB1": "ne",
        "weopB1-fTClr1": "sw",
        "fTClr1-YFpi91": "sw",
        "YFpi91-fTClr1": "ne",
        "fTClr1-BaAUD/": "se",
        "BaAUD/-fTClr1": "nw",
        "9tq4w0-M.SVt/": "e",
        "M.SVt/-9tq4w0": "w",
        "M.SVt/-7FMiH0": "ne",
        "7FMiH0-M.SVt/": "sw",
        "7FMiH0-xtiJr1": "ne",
        "xtiJr1-7FMiH0": "sw",
        "xtiJr1-TLYcO1": "n",
        "TLYcO1-xtiJr1": "s",
        "TLYcO1-mdCGK0": "n",
        "mdCGK0-TLYcO1": "s",
        "mdCGK0-5kEOw0": "nw",
        "5kEOw0-mdCGK0": "se",
        "5kEOw0-kX/yh1": "n",
        "kX/yh1-5kEOw0": "s",
        "kX/yh1-zfMKX.": "nw",
        "zfMKX.-kX/yh1": "se",
        "kX/yh1-Lee1X1": "ne",
        "Lee1X1-kX/yh1": "sw",
        "5kEOw0-7eQu10": "nw",
        "7eQu10-5kEOw0": "se",
        "7eQu10-ezoSh/": "w",
        "ezoSh/-7eQu10": "e",
        "ezoSh/-rn5n90": "w",
        "rn5n90-ezoSh/": "e",
        "rn5n90-xKP770": "sw",
        "xKP770-rn5n90": "ne",
        "xKP770-KOC3o0": "s",
        "KOC3o0-xKP770": "n",
        "KOC3o0-K9CUN.": "se",
        "K9CUN.-KOC3o0": "nw",
        "K9CUN.-9VlBA/": "ne",
        "9VlBA/-K9CUN.": "sw",
        "9VlBA/-5xuNJ.": "n",
        "5xuNJ.-9VlBA/": "s",
        "9VlBA/-vXGF4/": "s",
        "vXGF4/-9VlBA/": "n",
        "vXGF4/-GGB2y/": "se",
        "GGB2y/-vXGF4/": "nw",
        "KOC3o0-rC/1U1": "s",
        "rC/1U1-KOC3o0": "n",
        "rC/1U1-u2.9r.": "w",
        "u2.9r.-rC/1U1": "e",
        "u2.9r.-0KqE71": "w",
        "0KqE71-u2.9r.": "e",
        "0KqE71-/7Ifg0": "sw",
        "/7Ifg0-0KqE71": "ne",
        "/7Ifg0-5nbep0": "se",
        "5nbep0-/7Ifg0": "nw",
        "5nbep0-I1/tS0": "e",
        "I1/tS0-5nbep0": "w",
        "I1/tS0-91TdJ/": "ne",
        "91TdJ/-I1/tS0": "sw",
        "I1/tS0-mIq5H1": "se",
        "mIq5H1-I1/tS0": "nw",
        "/7Ifg0-LX8QU/": "sw",
        "LX8QU/-/7Ifg0": "ne",
        "LX8QU/-ZRiIN/": "nw",
        "ZRiIN/-LX8QU/": "se",
        "ZRiIN/-c0wrC/": "ne",
        "c0wrC/-ZRiIN/": "sw",
        "c0wrC/-8bPby/": "ne",
        "8bPby/-c0wrC/": "sw",
        "8bPby/-WDBqB1": "e",
        "WDBqB1-8bPby/": "w",
        "8bPby/-2A32y0": "nw",
        "2A32y0-8bPby/": "se",
        "LX8QU/-eteG0/": "s",
        "eteG0/-LX8QU/": "n",
        "eteG0/-sLjLK1": "s",
        "sLjLK1-eteG0/": "n",
        "sLjLK1-7mrQo1": "se",
        "7mrQo1-sLjLK1": "nw",
        "7mrQo1-QAb1t.": "s",
        "QAb1t.-7mrQo1": "n",
        "wnx/I1-ib54O/": "nw",
        "ib54O/-wnx/I1": "se",
        "wnx/I1-ALSlX0": "se",
        "ALSlX0-wnx/I1": "nw",
        "ALSlX0-2wgJV/": "u",
        "2wgJV/-ALSlX0": "d",
        "ib54O/-5P3V40": "u",
        "5P3V40-ib54O/": "d",
        "wnx/I1-X9TFg/": "sw",
        "X9TFg/-wnx/I1": "ne",
        "X9TFg/-qDD6q1": "sw",
        "qDD6q1-X9TFg/": "ne",
        "qDD6q1-7uFPP1": "se",
        "7uFPP1-qDD6q1": "nw",
        "7uFPP1-b3rdx/": "e",
        "b3rdx/-7uFPP1": "w",
        "b3rdx/-Ug6Op.": "e",
        "Ug6Op.-b3rdx/": "w",
        "Ug6Op.-uhytF1": "e",
        "uhytF1-Ug6Op.": "w",
        "rH.FI0-FrdbL1": "s",
        "FrdbL1-rH.FI0": "n",
        "FrdbL1-3JU7C/": "s",
        "3JU7C/-FrdbL1": "n",
        "3JU7C/-uvR/1.": "w",
        "uvR/1.-3JU7C/": "e",
        "uvR/1.-xTfi5/": "w",
        "xTfi5/-uvR/1.": "e",
        "xTfi5/-g/dYq/": "nw",
        "g/dYq/-xTfi5/": "se",
        "xTfi5/-cmUvt/": "w",
        "cmUvt/-xTfi5/": "e",
        "cmUvt/-NLgml.": "nw",
        "NLgml.-cmUvt/": "se",
        "xTfi5/-ErKXo1": "s",
        "ErKXo1-xTfi5/": "n",
        "ErKXo1-j4ZA40": "s",
        "j4ZA40-ErKXo1": "n",
        "j4ZA40-Jh4U20": "s",
        "Jh4U20-j4ZA40": "n",
        "Jh4U20-gNv8x/": "s",
        "gNv8x/-Jh4U20": "n",
        "gNv8x/-.ukfO1": "w",
        ".ukfO1-gNv8x/": "e",
        ".ukfO1-wJBLB/": "w",
        "wJBLB/-.ukfO1": "e",
        "wJBLB/-Hjkgx.": "sw",
        "Hjkgx.-wJBLB/": "ne",
        "gNv8x/-5i9dx0": "e",
        "5i9dx0-gNv8x/": "w",
        "5i9dx0-2Fw9Q/": "e",
        "2Fw9Q/-5i9dx0": "w",
        "2Fw9Q/-pPBYM/": "e",
        "pPBYM/-2Fw9Q/": "w",
        "pPBYM/-kVmb00": "e",
        "kVmb00-pPBYM/": "w",
        "kVmb00-HvLde.": "e",
        "HvLde.-kVmb00": "w",
        "HvLde.-Ad4Yy.": "e",
        "Ad4Yy.-HvLde.": "w",
        "Ad4Yy.-IWJ940": "e",
        "IWJ940-Ad4Yy.": "w",
        "Ad4Yy.-dPFW/.": "s",
        "dPFW/.-Ad4Yy.": "n",
        "2Fw9Q/-CArE71": "n",
        "CArE71-2Fw9Q/": "s",
        "CArE71-BWLGw.": "n",
        "BWLGw.-CArE71": "s",
        "BWLGw.-jfrxo/": "e",
        "jfrxo/-BWLGw.": "w",
        "BWLGw.-6YwLd/": "n",
        "6YwLd/-BWLGw.": "s",
        "6YwLd/-3JU7C/": "n",
        "3JU7C/-6YwLd/": "s",
        "6YwLd/-yO/lx0": "e",
        "yO/lx0-6YwLd/": "w",
        "yO/lx0-Wu.1s/": "ne",
        "Wu.1s/-yO/lx0": "sw",
        "pPBYM/-GESN30": "s",
        "GESN30-pPBYM/": "n",
        "GESN30-Q9O55/": "e",
        "Q9O55/-GESN30": "w",
        "Q9O55/-z5Dks1": "e",
        "z5Dks1-Q9O55/": "w",
        "z5Dks1-HvLde.": "n",
        "HvLde.-z5Dks1": "s",
        "GESN30-Tu0oc0": "s",
        "Tu0oc0-GESN30": "n",
        "Tu0oc0-T3Y8g/": "s",
        "T3Y8g/-Tu0oc0": "n",
        "T3Y8g/-icEdP0": "w",
        "icEdP0-T3Y8g/": "e",
        "icEdP0-XiZCS0": "n",
        "XiZCS0-icEdP0": "s",
        "XiZCS0-s/SvB0": "n",
        "s/SvB0-XiZCS0": "s",
        "s/SvB0-2Fw9Q/": "n",
        "2Fw9Q/-s/SvB0": "s",
        "5i9dx0-.Qr711": "s",
        ".Qr711-5i9dx0": "n",
        ".Qr711-6IeSu1": "s",
        "6IeSu1-.Qr711": "n",
        "6IeSu1-Ye/h41": "s",
        "Ye/h41-6IeSu1": "n",
        "Ye/h41-dDq0K/": "s",
        "dDq0K/-Ye/h41": "n",
        "Ye/h41-icEdP0": "e",
        "icEdP0-Ye/h41": "w",
        "Ye/h41-qYCmZ.": "w",
        "qYCmZ.-Ye/h41": "e",
        "qYCmZ.-f5owe0": "w",
        "f5owe0-qYCmZ.": "e",
        "icEdP0-cn71d/": "s",
        "cn71d/-icEdP0": "n",
        "cn71d/-tkgmz0": "s",
        "tkgmz0-cn71d/": "n",
        "tkgmz0-pHO6S.": "s",
        "pHO6S.-tkgmz0": "n",
        "T3Y8g/-JFHEy1": "se",
        "JFHEy1-T3Y8g/": "nw",
        "JFHEy1-B4dFN.": "se",
        "B4dFN.-JFHEy1": "nw",
        "B4dFN.-IoG/k/": "se",
        "IoG/k/-B4dFN.": "nw",
        "IoG/k/-c1g9q.": "s",
        "c1g9q.-IoG/k/": "n",
        "IoG/k/-Rh2TC.": "e",
        "Rh2TC.-IoG/k/": "w",
        "Rh2TC.-YnxhY0": "e",
        "YnxhY0-Rh2TC.": "w",
        "YnxhY0-f47Kz.": "ne",
        "f47Kz.-YnxhY0": "sw",
        "f47Kz.-MPagZ1": "ne",
        "MPagZ1-f47Kz.": "sw",
        "vkCvl/-xL0lu.": "w",
        "xL0lu.-vkCvl/": "e",
        "xL0lu.-1QXgc/": "s",
        "1QXgc/-xL0lu.": "n",
        "1QXgc/-Zmrrp/": "s",
        "Zmrrp/-1QXgc/": "n",
        "xL0lu.-1YVtg0": "w",
        "1YVtg0-xL0lu.": "e",
        "1YVtg0-OB61G/": "s",
        "OB61G/-1YVtg0": "n",
        "OB61G/-Hakla/": "sw",
        "Hakla/-OB61G/": "ne",
        "Hakla/-XKBE9/": "w",
        "XKBE9/-Hakla/": "e",
        "XKBE9/-lyea10": "sw",
        "lyea10-XKBE9/": "ne",
        "lyea10-BguJS/": "w",
        "BguJS/-lyea10": "e",
        "XKBE9/-Dj0Vl/": "nw",
        "Dj0Vl/-XKBE9/": "e",
        "Dj0Vl/-vztaz.": "w",
        "vztaz.-Dj0Vl/": "e",
        "1YVtg0-POt5z0": "w",
        "POt5z0-1YVtg0": "e",
        "POt5z0-hHnq4/": "w",
        "hHnq4/-POt5z0": "e",
        "hHnq4/-yKTjF1": "w",
        "yKTjF1-hHnq4/": "e",
        "yKTjF1-2sQ6R.": "w",
        "2sQ6R.-yKTjF1": "e",
        "2sQ6R.-6EzQB1": "ne",
        "6EzQB1-2sQ6R.": "sw",
        "6EzQB1-DgtKd.": "ne",
        "DgtKd.-6EzQB1": "sw",
        "DgtKd.-f3/1Q.": "n",
        "f3/1Q.-DgtKd.": "s",
        "f3/1Q.-z8vST0": "w",
        "z8vST0-f3/1Q.": "e",
        "f3/1Q.-3zR4M1": "e",
        "3zR4M1-f3/1Q.": "w",
        "3zR4M1-bqwTy.": "e",
        "bqwTy.-3zR4M1": "w",
        "bqwTy.-rLvAR1": "e",
        "rLvAR1-bqwTy.": "w",
        "rLvAR1-1Tqzh/": "s",
        "1Tqzh/-rLvAR1": "n",
        "1Tqzh/-.zidQ.": "s",
        ".zidQ.-1Tqzh/": "n",
        ".zidQ.-xL0lu.": "s",
        "xL0lu.-.zidQ.": "n",
        ".zidQ.-oFoGW.": "e",
        "oFoGW.-.zidQ.": "w",
        "oFoGW.-OQ4a/1": "ne",
        "OQ4a/1-oFoGW.": "sw",
        "OQ4a/1-LFoxB.": "se",
        "LFoxB.-OQ4a/1": "nw",
        "LFoxB.-fhz6S0": "s",
        "fhz6S0-LFoxB.": "n",
        "fhz6S0-yWxue.": "e",
        "yWxue.-fhz6S0": "w",
        "yWxue.-xOVDc0": "n",
        "xOVDc0-yWxue.": "s",
        "xOVDc0-FS.yF0": "e",
        "FS.yF0-xOVDc0": "w",
        "FS.yF0-/Eco41": "s",
        "/Eco41-FS.yF0": "n",
        "/Eco41-rV3FJ.": "e",
        "rV3FJ.-/Eco41": "w",
        "rV3FJ.-Bc6c1.": "e",
        "Bc6c1.-rV3FJ.": "w",
        "Bc6c1.-kW9JI.": "n",
        "kW9JI.-Bc6c1.": "s",
        "kW9JI.-xyrLn1": "w",
        "xyrLn1-kW9JI.": "e",
        "rLvAR1-IyMuL0": "ne",
        "IyMuL0-rLvAR1": "sw",
        "IyMuL0-LYHXj.": "e",
        "LYHXj.-IyMuL0": "w",
        "LYHXj.-FK3SY0": "s",
        "FK3SY0-LYHXj.": "n",
        "rLvAR1-woVHj/": "n",
        "woVHj/-rLvAR1": "s",
        "woVHj/-CtFi7.": "n",
        "CtFi7.-woVHj/": "s",
        "CtFi7.-apuMd0": "n",
        "apuMd0-CtFi7.": "s",
        "FK3SY0-C6ff21": "u",
        "C6ff21-FK3SY0": "d",
        "C6ff21-wWCom/": "s",
        "wWCom/-C6ff21": "n",
        "wWCom/-m5SoV0": "s",
        "m5SoV0-wWCom/": "n",
        "m5SoV0-wHzzk.": "e",
        "wHzzk.-m5SoV0": "w",
        "wWCom/-cWFkp/": "w",
        "cWFkp/-wWCom/": "e",
        "cWFkp/-QKQ7w/": "sw",
        "QKQ7w/-cWFkp/": "ne",
        "QKQ7w/-VvmrT.": "n",
        "VvmrT.-QKQ7w/": "s",
        "VvmrT.-virI9.": "n",
        "virI9.-VvmrT.": "s",
        "virI9.-KuS2a1": "n",
        "KuS2a1-virI9.": "s",
        "QKQ7w/-FVl.I0": "nw",
        "FVl.I0-QKQ7w/": "se",
        "FVl.I0-oxqcl/": "w",
        "oxqcl/-FVl.I0": "e",
        "oxqcl/-KNgON1": "n",
        "KNgON1-oxqcl/": "s",
        "KNgON1-SSagv/": "e",
        "SSagv/-KNgON1": "w",
        "SSagv/-b9zqb1": "n",
        "b9zqb1-SSagv/": "s",
        "b9zqb1-Ypxkj1": "w",
        "Ypxkj1-b9zqb1": "e",
        "SSagv/-00fSS0": "ne",
        "00fSS0-SSagv/": "sw",
        "QKQ7w/-Uwp3U0": "sw",
        "Uwp3U0-QKQ7w/": "ne",
        "QKQ7w/-8w.OH/": "s",
        "8w.OH/-QKQ7w/": "n",
        "8w.OH/-jNI9l0": "s",
        "jNI9l0-8w.OH/": "n",
        "jNI9l0-mb2nx0": "s",
        "mb2nx0-jNI9l0": "n",
        "mb2nx0-pWAIV0": "nw",
        "pWAIV0-mb2nx0": "se",
        "mb2nx0-PyNse0": "s",
        "PyNse0-mb2nx0": "n",
        "PyNse0-FJd7K1": "s",
        "FJd7K1-PyNse0": "n",
        "wWCom/-2C3sq/": "u",
        "2C3sq/-wWCom/": "d",
        "2C3sq/-2wvH7/": "n",
        "2wvH7/-2C3sq/": "s",
        "2C3sq/-jfrxo/": "u",
        "jfrxo/-2C3sq/": "d",
        "rH.FI0-QNdtC0": "e",
        "QNdtC0-rH.FI0": "w",
        "QNdtC0-0FnB2/": "n",
        "0FnB2/-QNdtC0": "s",
        "0FnB2/-1TADp/": "n",
        "1TADp/-0FnB2/": "s",
        "1TADp/-HjS55/": "ne",
        "HjS55/-1TADp/": "sw",
        "HjS55/-qDwQY0": "nw",
        "qDwQY0-HjS55/": "se",
        "qDwQY0-xoyxx.": "nw",
        "xoyxx.-qDwQY0": "se",
        "xoyxx.-36L.2.": "nw",
        "36L.2.-xoyxx.": "se",
        "36L.2.-5fOe/0": "nw",
        "5fOe/0-36L.2.": "se",
        "5fOe/0-QCtD4.": "nw",
        "QCtD4.-5fOe/0": "se",
        "QCtD4.-bOWMs.": "nw",
        "bOWMs.-QCtD4.": "se",
        "bOWMs.-H5LYL/": "nw",
        "H5LYL/-bOWMs.": "se",
        "H5LYL/-GxRjy/": "n",
        "GxRjy/-H5LYL/": "s",
        "GxRjy/-iA/NY/": "n",
        "iA/NY/-GxRjy/": "s",
        "iA/NY/-ll9Db/": "nw",
        "ll9Db/-iA/NY/": "se",
        "ll9Db/-JEmzJ0": "n",
        "JEmzJ0-ll9Db/": "s",
        "JEmzJ0-/9F1Z/": "n",
        "/9F1Z/-JEmzJ0": "s",
        "/9F1Z/-ab1I2/": "nw",
        "ab1I2/-/9F1Z/": "se",
        "ab1I2/-978IL/": "n",
        "978IL/-ab1I2/": "s",
        "978IL/-kokjC0": "w",
        "kokjC0-978IL/": "e",
        "kokjC0-dRkDW1": "n",
        "dRkDW1-kokjC0": "s",
        "dRkDW1-TQ5we/": "n",
        "TQ5we/-dRkDW1": "s",
        "TQ5we/-csjuO.": "n",
        "csjuO.-TQ5we/": "s",
        "csjuO.-j6ZW70": "w",
        "j6ZW70-csjuO.": "e",
        "j6ZW70-X6xPW0": "w",
        "X6xPW0-j6ZW70": "e",
        "X6xPW0-5QQXY0": "w",
        "5QQXY0-X6xPW0": "e",
    };

    setTimeout(function() {
        g.bfs(window.startRoom, "j6ZW70")
    }, 500);

    setTimeout(deliver, 1000);
})();

function deliver() {
    const rooms = window.escapePath.split("-");
    rooms.forEach((x, i) => {
        let prev = i > 0 ? rooms[i - 1] : null;
        let next = i < rooms.length ? rooms[i + 1] : null;
        if (prev == null) {} else {
            const queue = [];
            queue.push(`${prep}-${x}`);
            $("#input").val(directions[`${prev}-${x}`]);
            const enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                which: 13,
                keyCode: 13,
                bubbles: true,
                cancelable: true
            });
            $("#input").focus();
            document.getElementById('input').dispatchEvent(enterEvent);
            $("#input").val("");
            $("#input").trigger("blur");
        }
    });
}
