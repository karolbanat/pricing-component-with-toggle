const basicPrice = document.querySelector('#basic-price');
const proPrice = document.querySelector('#professional-price');
const masterPrice = document.querySelector('#master-price');
const toggleBtn = document.querySelector('.toggle-btn');

const prices = {
	basic: {
		monthly: 19.99,
		annual: 199.99,
	},
	pro: {
		monthly: 24.99,
		annual: 249.99,
	},
	master: {
		monthly: 39.99,
		annual: 399.99,
	},
};

const handleToggleBtn = () => {
	if (toggleBtn.dataset.plan === 'monthly') {
		toggleBtn.dataset.plan = 'annual';
		toggleBtn.ariaLabel = 'Change to monthly plan';
		basicPrice.innerText = prices.basic.annual;
		proPrice.innerText = prices.pro.annual;
		masterPrice.innerText = prices.master.annual;
	} else if (toggleBtn.dataset.plan === 'annual') {
		toggleBtn.dataset.plan = 'monthly';
		toggleBtn.ariaLabel = 'Change to annual plan';
		basicPrice.innerText = prices.basic.monthly;
		proPrice.innerText = prices.pro.monthly;
		masterPrice.innerText = prices.master.monthly;
	}
};

toggleBtn.addEventListener('click', handleToggleBtn);
