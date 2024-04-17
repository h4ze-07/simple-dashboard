let usersContainer = document.getElementById('list');

let users = [
    {
        id: 1,
        name: 'Jane Cooper',
        company: 'Microsoft',
        phone: '(225) 555-0118',
        email: 'jane@microsoft.com',
        country: 'United States',
        isActive: true,
    },
    {
        id: 2,
        name: 'Floyd Miles',
        company: 'Yahoo',
        phone: '(205) 555-0100',
        email: 'floyd@yahoo.com',
        country: 'Kiribati',
        isActive: false,
    },
    {
        id: 3,
        name: 'Ronald Richards',
        company: 'Adobe',
        phone: '(302) 555-0107',
        email: 'ronald@adobe.com',
        country: 'Israel',
        isActive: false,
    },
    {
        id: 4,
        name: 'Marvin McKinney',
        company: 'Tesla',
        phone: '(252) 555-0126',
        email: 'marvin@tesla.com',
        country: 'Iran',
        isActive: true,
    },
    {
        id: 5,
        name: 'Jerome Bell',
        company: 'Google',
        phone: '(629) 555-0129',
        email: 'jerome@google.com',
        country: 'Réunion',
        isActive: true,
    },
    {
        id: 6,
        name: 'Kathryn Murphy',
        company: 'Microsoft',
        phone: '(406) 555-0120',
        email: 'kathryn@microsoft.com',
        country: 'Curaçao',
        isActive: true,
    },
    {
        id: 7,
        name: 'Jacob Jones',
        company: 'Yahoo',
        phone: '(208) 555-0112',
        email: 'jacob@yahoo.com',
        country: 'Brazil',
        isActive: true,
    },
    {
        id: 8,
        name: 'Kristin Watson',
        company: 'Facebook',
        phone: '(704) 555-0127',
        email: 'kristin@facebook.com',
        country: 'Åland Islands',
        isActive: false,
    },
]



const displayUsers = () => {
    let html = '';

    users.forEach(u => {
        html += 
            `
                <div class="customers__user">
                    <span class="customers__user-info">${u.name}</span>
                    <span class="customers__user-info">${u.company}</span>
                    <span class="customers__user-info">${u.phone}</span>
                    <span class="customers__user-info">${u.email}</span>
                    <span class="customers__user-info">${u.country}</span>
                    <div class="status ${u.isActive ? 'active' : 'inactive'}">
                        ${u.isActive ? 'Active' : 'Inactive'}
                    </div>
                </div>
            `
    })

    usersContainer.innerHTML = html;
}

window.onload = () => displayUsers();
