export const change = val => {
	return val.map(list => {
		switch (list.name) {
			case 'site':
				list.entire = '网站';
				return list;
				break;
			case 'twitter':
				list.entire = '推特';
				return list;
				break;
			case 'telegram':
				list.entire = '电报群';
				return list;
				break;
			case 'github':
				list.entire = 'Github';
				return list;
				break;
			case 'reddit':
				list.entire = 'Reddit';
				return list;
				break;
			case 'facebook':
				list.entire = 'Facebook';
				return list;
				break;
			case 'whitepaper':
				list.entire = '白皮书';
				return list;
				break;
			case 'blockSite':
				list.entire = '区块站';
				return list;
				break;
			case 'slack':
				list.entire = 'Slack';
				return list;
				break;
			case 'youtube':
				list.entire = 'YoutuBe';
				return list;
				break;
			case 'blog':
				list.entire = '博客';
				return list;
				break;
			case 'bitcointalk':
				list.entire = 'Bitcointalk';
				return list;
				break;
		}
	});
};
