// Colecciones de datos que se pueden procesar en conjunto

// Calcular promedio
document.addEventListener("DOMContentLoaded", () => {

    const gradeForm = document.getElementById("grade-form");
    const subjectContainer = document.getElementById("div-subjects");
    const btnAvg = document.getElementById("btn-calc");
    const titleSubject = document.getElementById("subject");
    const modalContainer = document.getElementById("modal-overlay");
    const modalSubjectsMsg = document.getElementById("modal-subjects");

    gradeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (titleSubject.value && (titleSubject.value >= 0 && titleSubject.value <= 10)) {
            addSubject(titleSubject.value);
            gradeForm.reset();
        } else {
            alert("La nota debe de estar entre 0 y 10");
        }
    });

    function addSubject(subject) {        
        if (subjectContainer.childElementCount >= 10) {
            modalSubjects();
            modalSubjectsMsg.style.display = "flex";
        } else {
            const div = document.createElement("div");
            div.className = "p-2";
            div.textContent = subject;
    
            subjectContainer.appendChild(div);
        }
    }

    btnAvg.addEventListener("click", (e) => {
        e.preventDefault();
        deleteLastChild();
        avgCalculate();
        modalContainer.classList.add('animate__animated', 'animate__fadeIn');
        modalContainer.style.display = "flex";
    });
    
    function avgCalculate() {
      let suma = 0;
      let avg = 0;
      for (let i = 1; i < subjectContainer.childNodes.length; i++) {
        suma += +parseInt(subjectContainer.childNodes[i].textContent);
      }
      avg = suma / (subjectContainer.childNodes.length - 1);
      console.log(
        "El promedio de " +
          (subjectContainer.childNodes.length - 1) +
          " materias, es de: " +
          avg
      );
      designModal(avg, (subjectContainer.childNodes.length - 1));
    }

    function designModal(avg, subjects) {
        // Asegurar que el promedio se muestre con dos decimales
        const avgFloat = avg.toFixed(2);

        const modalDiv = document.createElement("div");
        modalDiv.className = "message-container animate__animated animate__backInDown";
        modalDiv.id = "modal-message";

        const subjectCount = document.createElement("p"); 
        subjectCount.id = "subject-count";
        subjectCount.textContent = "Total de Materias: " +  subjects;

        const avgGrade = document.createElement("p"); 
        avgGrade.id = "average-grade";
        avgGrade.textContent = "Promedio: " + avgFloat;

        const btnClose = document.createElement("button");
        btnClose.className = "btn btn-danger";
        btnClose.id = "close-modal";
        btnClose.textContent = "Cerrar";

        modalDiv.appendChild(subjectCount);
        modalDiv.appendChild(avgGrade);
        modalDiv.appendChild(btnClose);
        modalContainer.appendChild(modalDiv);


        btnClose.addEventListener("click", (e) => {
            closeModal(modalDiv, modalContainer);
        });
    }

    function modalSubjects() {
        const modalDiv = document.createElement("div");
        modalDiv.className = "message-container animate__animated animate__backInDown";
        modalDiv.id = "modal-message";

        const msg = document.createElement("p"); 
        msg.id = "limit-subjects";
        msg.textContent = "Solo se pueden agregar 10 materias";

        const btnClose = document.createElement("button");
        btnClose.className = "btn btn-danger";
        btnClose.id = "close-modal-subjects";
        btnClose.textContent = "Cerrar";

        modalDiv.appendChild(msg);
        modalDiv.appendChild(btnClose);
        modalSubjectsMsg.appendChild(modalDiv);

        btnClose.addEventListener("click", (e) => {
            closeModal(modalDiv, modalSubjectsMsg);
        });
    }

    // Función para cerrar el modal con una animación de salida
    function closeModal(modalDiv, modalContainer) {
        modalDiv.classList.replace('animate__backInDown', 'animate__backOutUp');
        modalContainer.classList.replace('animate__fadeIn', 'animate__fadeOut');

        // Añade un evento que se ejecutará cuando termine la animación de salida
        modalDiv.addEventListener('animationend', () => {
            modalContainer.style.display = 'none';
            modalContainer.classList.remove('animate__animated', 'animate__fadeOut');
            modalDiv.remove();
        }, { once: true }); // El evento se ejecutará solo una vez
    }

    function deleteLastChild() {
        const lastChild = modalContainer.querySelector('.message-container');
        if (lastChild) {
            modalContainer.removeChild(lastChild);
        }
    }
});