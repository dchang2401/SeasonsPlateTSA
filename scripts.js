
const ingredientsData = {
  vegBowl: {
    info: {
      name: 'Grilled Veggie Bowl',
      desc: 'A warm, hearty bowl loaded with roasted veggies.',
      calories: '180 kcal',
      prepTime: '8 minutes',
      tags: ['Vegan', 'Gluten-Free', 'Low Calorie']
    },
    ingredients: [
      {
        name: 'Broccoli',
        imageSrc: 'images/broccoli.png',
        preview: 'Local farm, 30 cal',
        details: {
          origin: 'Local organic farm',
          calories: '30 kcal',
          vitaminC: '135% DV',
          fiber: '2.4g',
          imageUrl: 'images/ingredient_broccoli.png'
        }
      },
      {
        name: 'Carrot',
        imageSrc: 'images/carrot.png',
        preview: 'Oregon farm, 25 cal',
        details: {
          origin: 'Oregon farm',
          calories: '25 kcal',
          vitaminA: '334% DV',
          fiber: '1.7g'
        }
      },
      {
        name: 'Garlic',
        imageSrc: 'images/garlic.png',
        preview: 'CA organic, 20 cal',
        details: {
          origin: 'California organic farm',
          calories: '20 kcal',
          antioxidant: 'High',
          usage: 'Flavoring agent'
        }
      }
    ]
  },
  lentilCurry: {
    info: {
      name: 'Lentil Curry',
      desc: 'Traditional Indian-style curry made from slow-cooked lentils.',
      calories: '220 kcal',
      prepTime: '12 minutes',
      tags: ['Spicy', 'High Protein']
    },
    ingredients: [
      {
        name: 'Lentils',
        imageSrc: 'images/lentils.png',
        preview: 'India, 120 cal',
        details: {
          origin: 'India',
          calories: '120 kcal',
          protein: '9g',
          iron: '20% DV'
        }
      },
      {
        name: 'Tomato',
        imageSrc: 'images/tomato.png',
        preview: 'Greenhouse, 18 cal',
        details: {
          origin: 'Greenhouse-grown',
          calories: '18 kcal',
          lycopene: 'Rich',
          vitaminC: '40% DV'
        }
      },
      {
        name: 'Spinach',
        imageSrc: 'images/spinach.png',
        preview: 'Hydroponic, 10 cal',
        details: {
          origin: 'Hydroponic farm',
          calories: '10 kcal',
          iron: '15% DV',
          calcium: '10% DV'
        }
      }
    ]
  },
  veggieWrap: {
    info: {
      name: 'Veggie Wrap',
      desc: 'A fresh wrap with crunchy vegetables and light dressing.',
      calories: '160 kcal',
      prepTime: '5 minutes',
      tags: ['On-the-go', 'Vegan']
    },
    ingredients: [
      {
        name: 'Lettuce',
        imageSrc: 'images/lettuce.png',
        preview: 'Local, 5 cal',
        details: {
          origin: 'Local source',
          calories: '5 kcal',
          hydration: '95% water',
          fiber: '1g'
        }
      },
      {
        name: 'Tomato',
        imageSrc: 'images/tomato.png',
        preview: 'Organic, 18 cal',
        details: {
          origin: 'Organic greenhouse',
          calories: '18 kcal',
          vitaminC: '40% DV',
          antioxidants: 'High'
        }
      },
      {
        name: 'Bell Pepper',
        imageSrc: 'images/bellpepper.png',
        preview: 'Mexico, 15 cal',
        details: {
          origin: 'Mexico farm',
          calories: '15 kcal',
          vitaminC: '120% DV',
          fiber: '1.5g'
        }
      }
    ]
  }
};

function showIngredients(menuKey) {
  document.querySelector('.menu-info').style.display = 'block';
  document.querySelector('.ingredient-section').style.display = 'block';
  const panel = document.getElementById('ingredientPanel');
  const infoPanel = document.getElementById('menuInfo');
  panel.innerHTML = '';
  infoPanel.innerHTML = '';

  const { info, ingredients } = ingredientsData[menuKey];

  /*
  const infoDiv = document.createElement('div');
  const title = document.createElement('h2');
  title.textContent = info.name;

  const desc = document.createElement('p');
  desc.textContent = info.desc;

  const cal = document.createElement('p');
  cal.innerHTML = `<strong>Calories:</strong> ${info.calories}`;

  const prep = document.createElement('p');
  prep.innerHTML = `<strong>Prep Time:</strong> ${info.prepTime}`;

  const tags = document.createElement('p');
  tags.innerHTML = `<strong>Tags:</strong> ${info.tags.map(tag => `🟢 ${tag}`).join(', ')}`;

  infoDiv.appendChild(title);
  infoDiv.appendChild(desc);
  infoDiv.appendChild(cal);
  infoDiv.appendChild(prep);
  infoDiv.appendChild(tags);
  infoPanel.appendChild(infoDiv);
  */

  const container = document.createElement('div');
  container.className = 'menu-info-container';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'menu-image';
  const image = document.createElement('img');
  image.src = `images/${menuKey}.jpg`;  // make sure to place images like images/vegBowl.jpg, images/lentilCurry.jpg etc.
  image.alt = info.name;
  image.className = 'menu-image-img';
  imageDiv.appendChild(image);

  const textDiv = document.createElement('div');
  textDiv.className = 'menu-text';

  const title = document.createElement('h2');
  title.textContent = info.name;

  const desc = document.createElement('p');
  desc.textContent = info.desc;

  const cal = document.createElement('p');
  cal.innerHTML = `<strong>Calories:</strong> ${info.calories}`;

  const prep = document.createElement('p');
  prep.innerHTML = `<strong>Prep Time:</strong> ${info.prepTime}`;

  const tags = document.createElement('p');
  tags.innerHTML = `<strong>Tags:</strong> ${info.tags.map(tag => `🟢 ${tag}`).join(', ')}`;

  textDiv.appendChild(title);
  textDiv.appendChild(desc);
  textDiv.appendChild(cal);
  textDiv.appendChild(prep);
  textDiv.appendChild(tags);

  container.appendChild(imageDiv);
  container.appendChild(textDiv);
  infoPanel.appendChild(container);

  ingredients.forEach((ing, i) => {
    setTimeout(() => {
      const row = document.createElement('div');
      row.className = 'ingredient-row';

      const bar = document.createElement('div');
      bar.className = 'ingredient-bar';

      //const icon = document.createElement('div');
      //icon.className = 'ingredient-icon';
      //icon.textContent = ing.image;

      const icon = document.createElement('div');
      icon.className = 'ingredient-icon';
      const iconImg = document.createElement('img');
      iconImg.src = ing.imageSrc;
      iconImg.alt = ing.name;
      iconImg.className = 'ingredient-icon-img';
      icon.appendChild(iconImg);

      const name = document.createElement('div');
      name.className = 'ingredient-name';
      name.textContent = ing.name;

      bar.appendChild(icon);
      bar.appendChild(name);
      bar.onclick = () => expandIngredient(row, ing);

      row.appendChild(bar);
      panel.appendChild(row);
    }, i * 300);
  });
}

function expandIngredient(container, ing) {
  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'ingredient-expanded';

  const header = document.createElement('div');
  header.className = 'ingredient-header';

  //const icon = document.createElement('span');
  //icon.className = 'ingredient-icon';
  //icon.textContent = ing.image;

  const icon = document.createElement('div');
  icon.className = 'ingredient-icon';
  const iconImg = document.createElement('img');
  iconImg.src = ing.imageSrc;
  iconImg.alt = ing.name;
  iconImg.className = 'ingredient-icon-img';
  icon.appendChild(iconImg);

  const title = document.createElement('span');
  title.className = 'ingredient-title';
  title.appendChild(icon);
  title.appendChild(document.createTextNode(ing.name));

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-button';
  closeBtn.innerHTML = '<img src="images/close.png" alt="Close">';
  closeBtn.onclick = () => collapseIngredient(container, ing);

  header.appendChild(title);
  header.appendChild(closeBtn);

  const body = document.createElement('div');
  body.className = 'ingredient-body';

  if (ing.details.imageUrl) {
    const img = document.createElement('img');
    img.src = ing.details.imageUrl;
    img.style.width = '70%';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.borderRadius = '8px';
    body.appendChild(img);
  }

  const origin = document.createElement('p');
  origin.innerHTML = `<strong>Origin:</strong> ${ing.details.origin}`;
  body.appendChild(origin);

  const table = document.createElement('table');
  table.style.marginTop = '0.5rem';
  table.style.width = '100%';

  Object.entries(ing.details).forEach(([key, val]) => {
    if (key !== 'origin' && key !== 'imageUrl') {
      const row = document.createElement('tr');
      const k = document.createElement('td');
      const v = document.createElement('td');
      k.textContent = key.charAt(0).toUpperCase() + key.slice(1);
      v.textContent = val;
      row.appendChild(k);
      row.appendChild(v);
      table.appendChild(row);
    }
  });

  body.appendChild(table);
  wrapper.appendChild(header);
  wrapper.appendChild(body);
  container.appendChild(wrapper);
}

function collapseIngredient(container, ing) {
  container.innerHTML = '';

  const bar = document.createElement('div');
  bar.className = 'ingredient-bar';

  //const icon = document.createElement('div');
  //icon.className = 'ingredient-icon';
  //icon.textContent = ing.image;

  const icon = document.createElement('div');
  icon.className = 'ingredient-icon';
  const iconImg = document.createElement('img');
  iconImg.src = ing.imageSrc;
  iconImg.alt = ing.name;
  iconImg.className = 'ingredient-icon-img';
  icon.appendChild(iconImg);

  const name = document.createElement('div');
  name.className = 'ingredient-name';
  name.textContent = ing.name;

  bar.appendChild(icon);
  bar.appendChild(name);
  bar.onclick = () => expandIngredient(container, ing);

  container.appendChild(bar);
}

function updateMenuFilter() {
  const selected = Array.from(document.querySelectorAll('.menu-filter:checked'))
    .map(cb => cb.dataset.filter);

  document.querySelectorAll('.menu-item').forEach(item => {
    const tags = item.dataset.tags ? item.dataset.tags.split(',') : [];

    // Show if all selected filters are included in this menu item's tags
    const matches = selected.every(f => tags.includes(f));
    item.style.display = matches ? 'block' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-filter').forEach(cb => {
    cb.addEventListener('change', updateMenuFilter);
  });

  updateMenuFilter(); // initial filter state
});

