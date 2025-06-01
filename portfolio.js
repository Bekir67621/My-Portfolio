const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    setTimeout(() => {
        button.textContent = "Нажми меня";
    }, 1500);
});

document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('.styled-table');

    tables.forEach((table, index) => {

        table.style.width = '80%';
        table.style.margin = '20px auto';
        table.style.borderCollapse = 'collapse';
        table.style.borderRadius = '10px';
        table.style.overflow = 'hidden';
        table.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        table.style.transition = 'all 0.3s ease';

        const cell = table.querySelector('td');
        cell.style.padding = '20px';
        cell.style.fontFamily = 'Arial, sans-serif';
        cell.style.lineHeight = '1.6';
        cell.style.color = '#333';


        const colors = ['#e3f2fd', '#e8f5e9', '#fff8e1'];
        cell.style.backgroundColor = colors[index];


        const heading = table.querySelector('h2');
        heading.style.color = '#2c3e50';
        heading.style.marginTop = '0';


        table.addEventListener('mouseover', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        table.addEventListener('mouseout', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});


