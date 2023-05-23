const currentDay = document.querySelector(".current-day");
const funFact = document.querySelector(".fun-fact");

const facts = [
	"Nie czekaj na okazję, stwórz ją sam. - George Bernard Shaw ",
	"Nie sukcesem jest to, co osiągnęliśmy, ale to, kim się dzięki niemu staliśmy. - Zig Ziglar",
	"Nie ma niczego trudniejszego niż podejmowanie decyzji, ale nic bardziej błogosławionego niż odwaga, by to zrobić. - Oprah Winfrey",
	"Nie uciekaj przed problemami, staw im czoła i przezwyciężaj je.- Edmund Burke",
	"Sukces to nie kwestia szczęścia, a ciężkiej pracy, wytrwałości i determinacji. - Colin Powell",
	"Nie bój się porażki, bo to tylko kolejny krok do sukcesu. - Michael Jordan",
	"Sukces to suma małych wysiłków, powtarzanych dzień po dniu. - Robert Collier",
	"Nie trać czasu na narzekanie, zacznij działać i zmieniać swoją sytuację. - Tony Robbins",
	"Sukces to nie kwestia talentu, a ciężkiej pracy i wytrwałości. - Stephen King",
	"Niech twoje cele będą wyższe niż twoje obawy, a twoje działania będą większe niż twoje słowa. - Tony Robbins",
	"Sukces to nie kwestia tego, co osiągnęliśmy, ale tego, jak wiele przeszkód pokonaliśmy, by go osiągnąć. - Booker T. Washington",
	"Nie ma niczego niemożliwego, jeśli masz determinację i chęć do działania. - Lou Holtz",
	"Sukces to nie kwestia szczęścia, a ciężkiej pracy i wytrwałości. - Vince Lombardi",
	"Niech twoje cele będą wyzwaniem, a twoje działania będą doprowadzać cię do nich. - Jim Rohn",
	"Sukces to nie kwestia tego, jak dużo zarabiasz, ale tego, jak bardzo kochasz to, co robisz. - Warren Buffett",
	"Nie bój się zmian, bo to one prowadzą do postępu i sukcesu. - Charles Darwin",
	"Sukces to nie kwestia szczęścia, a ciężkiej pracy, wytrwałości i poświęcenia. - Arnold Schwarzenegger",
	"Niech twoje cele będą większe niż twoje strachy, a twoje działania większe niż twoje słowa. - Unknown",
	"Sukces to nie kwestia talentu, a ciężkiej pracy, wytrwałości i determinacji. - Hattie McDaniel",
	"Nie bądź zadowolony ze średniości, dąż do doskonałości. - Steve Jobs",
	"Sukces to nie kwestia posiadanego majątku, a poziomu twojego zadowolenia z życia. - Zig Ziglar",
	"Nie bój się ryzyka, bo to one prowadzą do sukcesu. - Unknown",
	"Sukces to nie kwestia przypadku, a ciężkiej pracy, wytrwałości i determinacji. - Colin Powell",
	"Nie patrz wstecz, idź do przodu i osiągaj swoje cele. - George Allen",
	"Sukces to nie kwestia szczęścia, a ciężkiej pracy, wytrwałości i poświęcenia. - Tommy Lasorda",
	"Nie bój się próbować, bo to tylko kolejna szansa na sukces. - Unknown",
	"Sukces to nie kwestia posiadanych umiejętności, a poziomu twojego zaangażowania i wytrwałości. - Pat Summitt",
	"Niech twoje cele będą tak wysokie, że nie będziesz miał czasu na narzekanie. - Unknown",
	"Sukces to nie kwestia posiadanych talentów, a poziomu twojego zaangażowania i wytrwałości. - Michael Jordan",
	"Nie bój się wyzwań, bo to one prowadzą do sukcesu. - Unknown",
];

const day = new Date();
// console.log(day.toLocaleString("pl", { weekday: "long" }));
currentDay.textContent = day.toLocaleString("pl", { weekday: "long" });

const showRandom = () => {
	const number = Math.floor(Math.random() * facts.length);
	console.log(number);
	funFact.textContent = facts[number];
};

showRandom();
