
            const val = document.getElementById('num-val');
            const bin = document.getElementById('bin-res');
            const hex = document.getElementById('hex-res');

            function convert() {
                const n = parseInt(val.value || 0);
                bin.innerText = n.toString(2);
                hex.innerText = n.toString(16).toUpperCase();
            }
            val.addEventListener('input', convert);
            convert();
        