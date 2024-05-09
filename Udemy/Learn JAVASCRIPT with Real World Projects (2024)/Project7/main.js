let colorList = []

for (let i=0; i<3; i++) {
    let color = prompt('Please enter the color ' + parseInt(i + 1) + ':')
    colorList[i] = color
}

alert('Your color list is: ' + colorList)