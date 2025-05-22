fetch('party-packages.json')
    .then(response => response.json())
    .then(data => {
        const packagesContainer = document.getElementById('packages-container');
        const addOnsContainer = document.getElementById('add-ons-container');

        // Render Party Packages
        data.packages.forEach(pkg => {
            const packageDiv = document.createElement('div');
            packageDiv.className = 'package';
            packageDiv.innerHTML = `
                <h2>${pkg.name} - <span>${pkg.price}</span></h2>
                <p><strong>${pkg.kidsLimit}</strong></p>
                <p>${pkg.description}</p>
                <h4>Add-ons:</h4>
                <ul>
                    ${pkg.addOns.map(addOn => `<li>${addOn}</li>`).join('')}
                </ul>
            `;
            packagesContainer.appendChild(packageDiv);
        });

        // Render Add-ons
        const addOnsTitle = document.createElement('h3');
        addOnsTitle.textContent = 'Additional Add-ons:';
        addOnsContainer.appendChild(addOnsTitle);

        const addOnsList = document.createElement('ul');
        data.addOns.forEach(addOn => {
            const addOnItem = document.createElement('li');
            addOnItem.textContent = `${addOn.name} - ${addOn.price}`;
            addOnsList.appendChild(addOnItem);
        });
        addOnsContainer.appendChild(addOnsList);
    })
    .catch(error => console.error('Error loading party packages:', error));