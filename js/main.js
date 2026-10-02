/**
 * CORBY MOBILE TYRES 24 HOUR SERVICE — Production JavaScript
 * Fast, lightweight, zero external library dependency
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initQuoteForm();
  initTyreSizeHelper();
  initFAQAccordion();
  initAnalyticsClickTracker();
});

/**
 * 1. Mobile Drawer Navigation
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!menuBtn || !drawer || !overlay) return;

  function openMenu() {
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    drawer.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });
}

/**
 * 2. Quote & Assistance Form Handling (With Real WhatsApp & Phone Fallback)
 * Strictly avoids fake "Saved to DB" alerts without an actual backend.
 */
function initQuoteForm() {
  const form = document.getElementById('assistance-form');
  const whatsappBtn = document.getElementById('btn-send-whatsapp');
  const modal = document.getElementById('request-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalSummary = document.getElementById('modal-summary');

  if (!form) return;

  function buildMessagePayload() {
    const name = document.getElementById('field-name')?.value.trim() || 'Not specified';
    const phone = document.getElementById('field-phone')?.value.trim() || 'Not specified';
    const vehicle = document.getElementById('field-vehicle')?.value.trim() || 'Not specified';
    const tyreSize = document.getElementById('field-tyre-size')?.value.trim() || 'Not specified';
    const location = document.getElementById('field-location')?.value.trim() || 'Not specified';
    const problem = document.getElementById('field-problem')?.value || 'Emergency Tyre Assistance';
    const method = document.getElementById('field-method')?.value || 'WhatsApp / Call';
    const notes = document.getElementById('field-notes')?.value.trim() || 'None';

    const text = `🚨 *CORBY MOBILE TYRES ASSISTANCE REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🚗 *Vehicle:* ${vehicle}\n` +
      `🔘 *Tyre Size:* ${tyreSize}\n` +
      `📍 *Location:* ${location}\n` +
      `⚠️ *Issue:* ${problem}\n` +
      `📱 *Preferred Contact:* ${method}\n` +
      `💬 *Details:* ${notes}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Please confirm availability & price quote.`;

    return {
      name,
      phone,
      vehicle,
      tyreSize,
      location,
      problem,
      method,
      notes,
      encodedText: encodeURIComponent(text)
    };
  }

  function validateForm() {
    let isValid = true;
    const phoneInput = document.getElementById('field-phone');
    const locationInput = document.getElementById('field-location');

    // Phone is critical for mobile tyre response
    if (phoneInput && phoneInput.value.trim().length < 9) {
      phoneInput.classList.add('border-red-500', 'ring-2', 'ring-red-500/20');
      isValid = false;
    } else if (phoneInput) {
      phoneInput.classList.remove('border-red-500', 'ring-2', 'ring-red-500/20');
    }

    // Location is critical for dispatch
    if (locationInput && locationInput.value.trim().length < 2) {
      locationInput.classList.add('border-red-500', 'ring-2', 'ring-red-500/20');
      isValid = false;
    } else if (locationInput) {
      locationInput.classList.remove('border-red-500', 'ring-2', 'ring-red-500/20');
    }

    return isValid;
  }

  // Action A: Direct WhatsApp Dispatch (Verified prompt: "quoted me promptly when I reached out to them via WhatsApp")
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!validateForm()) {
        const errorBanner = document.getElementById('form-error-banner');
        if (errorBanner) {
          errorBanner.classList.remove('hidden');
          errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        return;
      }

      const payload = buildMessagePayload();
      const whatsappUrl = `https://wa.me/447404355044?text=${payload.encodedText}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Action B: Form Submit / Request Callback
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const errorBanner = document.getElementById('form-error-banner');
      if (errorBanner) {
        errorBanner.classList.remove('hidden');
        errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    const payload = buildMessagePayload();

    if (modal && modalSummary) {
      modalSummary.innerHTML = `
        <div class="space-y-2 text-sm text-left bg-[#101419] p-4 rounded-xl border border-gray-800">
          <p><strong class="text-white">Location:</strong> <span class="text-[#fee400]">${escapeHTML(payload.location)}</span></p>
          <p><strong class="text-white">Phone:</strong> <span class="text-[#fee400]">${escapeHTML(payload.phone)}</span></p>
          <p><strong class="text-white">Vehicle:</strong> <span class="text-gray-300">${escapeHTML(payload.vehicle)}</span></p>
          <p><strong class="text-white">Tyre Size:</strong> <span class="text-gray-300">${escapeHTML(payload.tyreSize)}</span></p>
          <p><strong class="text-white">Issue:</strong> <span class="text-gray-300">${escapeHTML(payload.problem)}</span></p>
        </div>
      `;

      const directWhatsAppLink = document.getElementById('modal-whatsapp-link');
      if (directWhatsAppLink) {
        directWhatsAppLink.href = `https://wa.me/447404355044?text=${payload.encodedText}`;
      }

      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }
}

/**
 * 3. Tyre Size Quick-Select Helper
 */
function initTyreSizeHelper() {
  const chips = document.querySelectorAll('.tyre-chip');
  const tyreInput = document.getElementById('field-tyre-size');

  if (!chips || !tyreInput) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const size = chip.getAttribute('data-size');
      if (size) {
        tyreInput.value = size;
        tyreInput.focus();
        tyreInput.classList.add('border-[#fee400]');
        setTimeout(() => tyreInput.classList.remove('border-[#fee400]'), 1200);
      }
    });
  });
}

/**
 * 4. FAQ Accordion Enhancement
 */
function initFAQAccordion() {
  const details = document.querySelectorAll('#faq details');
  details.forEach(targetDetail => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        details.forEach(detail => {
          if (detail !== targetDetail && detail.open) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });
}

/**
 * 5. Track Telephone Taps (Factual User Feedback)
 */
function initAnalyticsClickTracker() {
  const callLinks = document.querySelectorAll('a[href^="tel:"]');
  callLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Accessible console feedback for developers & debugging
      console.info('[Corby Mobile Tyres] Calling hotline: 07404 355044');
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
