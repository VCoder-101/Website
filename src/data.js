
const data = {
    "name": "Иван",
    "title": "Разработчик программного обеспечения",
    "skills": ["Python", "JavaScript"],
    "description": "Уверенно работаю с Python (разработка ботов для автоматизации игровых действий и телеграм-ботов) и JavaScript (создавал простые сайты и пробовал писать игру). Имею опыт работы с базовыми технологиями веб-разработки: HTML, CSS, а также знаком с основами C/C++.",
    "projectInfo": "Проектная деятельность: Разрабатывал небольшие проекты, доступные на GitHub, где можно найти примеры ботов, созданных на Python, а также простые веб-приложения на JS.",
    "education": {
      "status": "Студент 3 курса",
      "section": "Образование"
    },
    "collaboration": {
      "title": "Давайте сотрудничать",
      "description": "Я активно ищу работу, чтобы применить свои навыки и опыт на практике, а также продолжить развиваться и осваивать новые технологии в профессиональной среде."
    }
  };


function loadData() {
    try {
        // const response = await fetch('/data.json');
        // const data = await response.json();
        
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.title').textContent = data.title;
        document.querySelector('.skills-text').textContent = data.skills.join(' • ');
        document.querySelector('.description').textContent = data.description;
        document.querySelector('.project-info').textContent = data.projectInfo;
        document.querySelector('.collaboration-title').textContent = data.collaboration.title;
        document.querySelector('.collaboration-text').textContent = data.collaboration.description;
        document.querySelector('.education-title').textContent = data.education.section;
        document.querySelector('.education-status').textContent = data.education.status;
    } catch (error) {
        console.error('Error loading data:', error);
    }
}