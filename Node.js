document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = "در حال ارسال...";
    status.style.color = "#aaffaa";

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblkdovd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        status.textContent = "پیام شما با موفقیت ارسال شد. ممنون!";
        form.reset();
      } else {
        const data = await response.json();
        status.textContent = data.error || "خطا در ارسال پیام";
        status.style.color = "#ff5555";
      }
    } catch (error) {
      status.textContent = "خطا در ارسال پیام: " + error.message;
      status.style.color = "#ff5555";
    }
  });
});
