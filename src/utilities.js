export const drawRect = (detections, ctx) => {

    var persons = 0
    var phones = 0
    var laptops = 0

    detections.forEach(prediction => {
        // Get prediction results
        const [x, y, width, height] = prediction['bbox'];
        const text = prediction['class'];

        ctx.font = '18px Arial'

        if (text == 'person')
        {   
            // Track number of persons
            persons+=1
            // Set styling
            // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const color = 'yellow'
            ctx.strokeStyle = color
            ctx.fillStyle = color

            // Draw rectangle and annotation
            ctx.beginPath()
            ctx.fillText(text + ' confidence: ' + Math.round(prediction['score']* 100) / 100, x, y)
            ctx.rect(x, y, width, height)
            ctx.stroke()
        }
        
        else if (text == 'cell phone')
        {   
            // Track number of phones
            phones += 1

            // Set styling
            // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const color = 'blue'
            ctx.strokeStyle = color
            ctx.fillStyle = color

            // Draw rectangle and annotation
            ctx.beginPath()
            ctx.fillText(text + ' confidence: ' + Math.round(prediction['score']* 100) / 100, x, y)
            ctx.rect(x, y, width, height)
            ctx.stroke()
        }
        else if (text == 'laptop')
        {   
            // Track number of laptops
            laptops += 1

            // Set styling
            // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            const color = 'green'
            ctx.strokeStyle = color
            ctx.fillStyle = color

            // Draw rectangle and annotation
            ctx.beginPath()
            ctx.fillText(text + ' confidence: ' + Math.round(prediction['score']* 100) / 100, x, y)
            ctx.rect(x, y, width, height)
            ctx.stroke()
        }

        
    })

    // Draw feedback
    if (persons == 0) { 
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.fillText("STUDENT NOT DETECTED", 50, 100)
        ctx.stroke()
    }
    else if (persons !== 1) { 
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.fillText("MULTIPLE PEOPLE DETECTED", 50, 100)
        ctx.stroke()
    }

    if (phones !== 0) { 
        ctx.fillStyle = 'blue'
        ctx.beginPath()
        ctx.fillText("CELL PHONE DETECTED", 50, 150)
        ctx.stroke()
    }
    if (laptops !== 0) { 
        ctx.fillStyle = 'green'
        ctx.beginPath()
        ctx.fillText("LAPTOP DETECTED", 50, 200)
        ctx.stroke()
    }

    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.fillText("Persons: " + persons + " |  Phones: " + phones + " |  Laptops: " + laptops, 50, 50)
    ctx.stroke()


    return [persons, phones, laptops]
}

// TODO - Finish
function checkObj(prediction, className, color, ctx)
{
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    if (text == className)
    {   
        // Track number of persons
        const items=1
        // Set styling
        // const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        // Draw rectangle and annotation
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
            
        return items;
        }
    else {
        return 0;
    }
}