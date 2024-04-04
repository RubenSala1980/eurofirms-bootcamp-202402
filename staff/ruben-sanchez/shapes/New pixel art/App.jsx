function App() {
    
        const initPixels = new Array(10)

        for (let i=0; i< initPixels.length; i++)
            initPixels[i] = new Array(initPixels.length).fill('black')

       
            const  [pixels,setPixels] = React.useState(initPixels)

            const [color,setColor] = React.useState('black')
    

   function paint(row, column){
       console.debug('App paint')

        const prevPixels = pixels

        const newPixels = new Array(prevPixels.length)
        for (let i=0; i < prevPixels.length; i++)
            newPixels[i] = new Array(prevPixels[0].length).fill('black')

        for (const i in prevPixels)
            for (const j in prevPixels[i])
                newPixels[i][j] = prevPixels[i][j]

        newPixels[row][column] =color

        setPixels(newPixels)
   }
    function clear() {
        console.debug('App clear')
        
        const prevPixels = pixels

        const newPixels = new Array(prevPixels.length)
        for (let i =0; i < prevPixels.length; i++)
            newPixels[i] = new Array(prevPixels[0].length).fill('black')

            setPixels(newPixels)

        }

        console.debug('App render')
        

        const colors = ['red','green','blue','yellow','white','black']

        

        return <>
            <header>
                <h1>Pixel Art</h1>
            </header>
            <main className="main">
                <ColorButtons colors={colors} onColorClick={color => setColor(color)} />

                <Pixels pixels={pixels} onPixelClick={(row,col) => paint(row,col)} />

                <button onClick={() => clear()}>reset</button>
            </main>
        <footer>

        </footer>
    </>

    }
