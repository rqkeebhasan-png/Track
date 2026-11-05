        /**************************************************************
         * 1. PRE-LOADED WEEKLY ROUTINE DATA (Sun=0 ... Sat=6)
         **************************************************************/
        const DEFAULT_WEEKLY_SCHEDULE = [
            {
                dayIndex: 0,
                shortEn: "SUN",
                nameEn: "Sunday",
                nameBn: "রবিবার",
                coreHours: 6.0,
                optionalHours: 1.0,
                tasks: [
                    { id: "sun-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 150 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sun-math", titleBn: "গণিত (Math)", titleEn: "Math", category: "math", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sun-eee", titleBn: "ইইই (EEE)", titleEn: "EEE", category: "eee", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sun-office", titleBn: "স্ক্র্যাচ + এক্সেল + ওয়ার্ড + পাওয়ারপয়েন্ট", titleEn: "Scratch + Excel + Word + PowerPoint", category: "system", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sun-coding-opt", titleBn: "অতিরিক্ত কোডিং (Coding Optional)", titleEn: "Coding (+1h Optional)", category: "coding", durationSec: 60 * 60, elapsedSec: 0, optional: true, completed: false }
                ]
            },
            {
                dayIndex: 1,
                shortEn: "MON",
                nameEn: "Monday",
                nameBn: "সোমবার",
                coreHours: 6.0,
                optionalHours: 0,
                tasks: [
                    { id: "mon-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 150 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "mon-math", titleBn: "গণিত (Math)", titleEn: "Math", category: "math", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "mon-physics", titleBn: "পদার্থবিজ্ঞান (Physics)", titleEn: "Physics", category: "science", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "mon-scratch", titleBn: "স্ক্র্যাচ (Scratch)", titleEn: "Scratch", category: "system", durationSec: 30 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "mon-win", titleBn: "বেসিক উইন্ডোজ (Basic Windows)", titleEn: "Basic Windows", category: "system", durationSec: 30 * 60, elapsedSec: 0, optional: false, completed: false }
                ]
            },
            {
                dayIndex: 2,
                shortEn: "TUE",
                nameEn: "Tuesday",
                nameBn: "মঙ্গলবার",
                coreHours: 4.5,
                optionalHours: 1.5,
                tasks: [
                    { id: "tue-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 150 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "tue-wincmd", titleBn: "উইন্ডোজ কমান্ড ও বিভিন্ন সিস্টেম শেখা", titleEn: "Windows Command + Learning Different Systems", category: "system", durationSec: 120 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "tue-coding-opt", titleBn: "অতিরিক্ত কোডিং (Coding Optional)", titleEn: "Coding (+1.5h Optional)", category: "coding", durationSec: 90 * 60, elapsedSec: 0, optional: true, completed: false }
                ]
            },
            {
                dayIndex: 3,
                shortEn: "WED",
                nameEn: "Wednesday",
                nameBn: "বুধবার",
                coreHours: 6.0,
                optionalHours: 0,
                tasks: [
                    { id: "wed-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 150 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "wed-eee", titleBn: "ইইই (EEE)", titleEn: "EEE", category: "eee", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "wed-physics", titleBn: "পদার্থবিজ্ঞান (Physics)", titleEn: "Physics", category: "science", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "wed-chem", titleBn: "রসায়ন (Chemistry)", titleEn: "Chemistry", category: "science", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false }
                ]
            },
            {
                dayIndex: 4,
                shortEn: "THU",
                nameEn: "Thursday",
                nameBn: "বৃহস্পতিবার",
                coreHours: 6.5,
                optionalHours: 0,
                tasks: [
                    { id: "thu-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 150 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "thu-eee", titleBn: "ইইই (EEE)", titleEn: "EEE", category: "eee", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "thu-math", titleBn: "গণিত (Math)", titleEn: "Math", category: "math", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "thu-chem", titleBn: "রসায়ন (Chemistry)", titleEn: "Chemistry", category: "science", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "thu-cce", titleBn: "সিসিই (CCE)", titleEn: "CCE", category: "eee", durationSec: 60 * 60, elapsedSec: 0, optional: false, completed: false }
                ]
            },
            {
                dayIndex: 5,
                shortEn: "FRI",
                nameEn: "Friday",
                nameBn: "শুক্রবার",
                coreHours: 7.0,
                optionalHours: 0,
                tasks: [
                    { id: "fri-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 240 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "fri-pyq", titleBn: "বিগত বছরের প্রশ্ন সমাধান (Previous Year Questions)", titleEn: "Previous Year Questions", category: "exam", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "fri-rev", titleBn: "গত সপ্তাহের রিভিশন (Previous Week Revision)", titleEn: "Previous Week Revision", category: "exam", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false }
                ]
            },
            {
                dayIndex: 6,
                shortEn: "SAT",
                nameEn: "Saturday",
                nameBn: "শনিবার",
                coreHours: 7.5,
                optionalHours: 0,
                tasks: [
                    { id: "sat-coding", titleBn: "কোডিং (Coding)", titleEn: "Coding", category: "coding", durationSec: 240 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sat-exam", titleBn: "বিগত বছরের অন্তত ২টি টপিকের ওপর পরীক্ষা (Exam)", titleEn: "Exam on at least 2 topics from PYQ", category: "exam", durationSec: 120 * 60, elapsedSec: 0, optional: false, completed: false },
                    { id: "sat-check", titleBn: "গত সপ্তাহের কোডিং প্র্যাকটিস চেক", titleEn: "Previous Week Coding Practice Check", category: "coding", durationSec: 90 * 60, elapsedSec: 0, optional: false, completed: false }
                ]
            }
        ];

        const STORAGE_KEY = "study_routine_express_v1";
        const ACTIVE_TIMER_KEY = `${STORAGE_KEY}_active_timer`;
        const CIRCUMFERENCE = 2 * Math.PI * 114; // ~716.28

        // Application State
        let scheduleData = [];
        let todayDayIndex = new Date().getDay(); // 0 (Sun) to 6 (Sat)
        let selectedDayIndex = todayDayIndex;
        let activeTaskId = null;
        let timerInterval = null;
        let isRunning = false;
        let lastTickTimestamp = null;
        let sessionStartTimestamp = null;
        let sessionInitialElapsedSec = 0;
        let studyLogDayIndex = todayDayIndex;

        /**************************************************************
         * 2. INITIALIZATION & STORAGE PERSISTENCE
         **************************************************************/
        function loadState() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed) && parsed.length === 7) {
                        scheduleData = parsed;
                        scheduleData.forEach(day => day.tasks.forEach(task => {
                            if (!Array.isArray(task.sessions)) task.sessions = [];
                        }));
                        return;
                    }
                }
            } catch (e) {
                console.warn("LocalStorage load error:", e);
            }
            scheduleData = JSON.parse(JSON.stringify(DEFAULT_WEEKLY_SCHEDULE));
        }

        function saveState() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(scheduleData));
            } catch (e) {
                console.warn("LocalStorage save error:", e);
            }
        }

        function saveActiveTimerState() {
            try {
                if (!isRunning || !activeTaskId || !sessionStartTimestamp) {
                    localStorage.removeItem(ACTIVE_TIMER_KEY);
                    return;
                }
                localStorage.setItem(ACTIVE_TIMER_KEY, JSON.stringify({
                    activeTaskId,
                    sessionStartTimestamp,
                    sessionInitialElapsedSec,
                    lastTickTimestamp
                }));
            } catch (e) {
                console.warn("Active timer save error:", e);
            }
        }

        function restoreActiveTimerState() {
            try {
                const raw = localStorage.getItem(ACTIVE_TIMER_KEY);
                if (!raw) return;
                const saved = JSON.parse(raw);
                if (!saved.activeTaskId || !saved.sessionStartTimestamp || !saved.lastTickTimestamp) {
                    localStorage.removeItem(ACTIVE_TIMER_KEY);
                    return;
                }
                if (!findTaskById(saved.activeTaskId)) {
                    localStorage.removeItem(ACTIVE_TIMER_KEY);
                    return;
                }
                activeTaskId = saved.activeTaskId;
                sessionStartTimestamp = saved.sessionStartTimestamp;
                sessionInitialElapsedSec = saved.sessionInitialElapsedSec || 0;
                lastTickTimestamp = saved.lastTickTimestamp;
                isRunning = true;
                tickTimer(Date.now());
                if (isRunning) {
                    timerInterval = setInterval(() => {
                        tickTimer(Date.now());
                    }, 1000);
                }
            } catch (e) {
                console.warn("Active timer restore error:", e);
                localStorage.removeItem(ACTIVE_TIMER_KEY);
            }
        }

        function initApp() {
            loadState();
            todayDayIndex = new Date().getDay();
            selectedDayIndex = todayDayIndex;

            // Display current date nicely
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('currentDateDisplay').textContent =
                "আজ: " + new Date().toLocaleDateString('bn-BD', dateOptions);

            // Pick first incomplete task of today as default active task
            const currentDayObj = scheduleData[selectedDayIndex];
            const firstIncomplete = currentDayObj.tasks.find(t => !t.completed) || currentDayObj.tasks[0];
            activeTaskId = firstIncomplete ? firstIncomplete.id : null;

            restoreActiveTimerState();
            renderDayTabs();
            renderSelectedDayView();
        }

        /**************************************************************
         * 3. HELPER FORMATTERS
         **************************************************************/
        function formatHMS(totalSeconds) {
            const sec = Math.max(0, Math.floor(totalSeconds));
            const h = Math.floor(sec / 3600);
            const m = Math.floor((sec % 3600) / 60);
            const s = sec % 60;
            return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
        }

        function formatHumanDurationBn(totalSeconds) {
            const totalMins = Math.round(totalSeconds / 60);
            const h = Math.floor(totalMins / 60);
            const m = totalMins % 60;
            if (h > 0 && m > 0) return `${h} ঘণ্টা ${m} মিনিট`;
            if (h > 0) return `${h} ঘণ্টা`;
            return `${m} মিনিট`;
        }

        function formatClockTime(timestamp) {
            return new Date(timestamp).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });
        }

        function formatSessionDate(timestamp) {
            return new Date(timestamp).toLocaleDateString('bn-BD', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        }

        function getTaskLoggedSeconds(task) {
            if (task.sessions && task.sessions.length > 0) {
                return task.sessions.reduce((total, session) => total + session.durationSec, 0);
            }
            return task.elapsedSec;
        }

        function getDayLoggedSeconds(day) {
            return day.tasks.reduce((total, task) => total + getTaskLoggedSeconds(task), 0);
        }

        function getCategoryStyle(category) {
            switch (category) {
                case 'coding':
                    return { icon: 'ph-code', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' };
                case 'math':
                    return { icon: 'ph-function', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/30' };
                case 'eee':
                    return { icon: 'ph-cpu', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
                case 'science':
                    return { icon: 'ph-atom', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' };
                case 'system':
                    return { icon: 'ph-terminal-window', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' };
                case 'exam':
                    return { icon: 'ph-exam', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' };
                default:
                    return { icon: 'ph-book-open', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
            }
        }

        /**************************************************************
         * 4. UI RENDERING
         **************************************************************/
        function renderDayTabs() {
            const container = document.getElementById('dayTabsContainer');
            container.innerHTML = '';

            scheduleData.forEach((day) => {
                const isSelected = day.dayIndex === selectedDayIndex;
                const isToday = day.dayIndex === todayDayIndex;

                // Calculate completion ratio for dot indicator
                const totalTarget = day.tasks.filter(t => !t.optional).reduce((acc, t) => acc + t.durationSec, 0);
                const totalDone = day.tasks.filter(t => !t.optional).reduce((acc, t) => acc + Math.min(t.durationSec, t.elapsedSec), 0);
                const pct = totalTarget > 0 ? Math.min(100, Math.round((totalDone / totalTarget) * 100)) : 0;

                const btn = document.createElement('button');
                btn.onclick = () => selectDay(day.dayIndex);
                btn.className = `px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition flex items-center gap-2 border ${
                    isSelected
                        ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-300 border-teal-500/50 shadow-sm'
                        : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 border-slate-800'
                }`;

                btn.innerHTML = `
                    <div class="flex flex-col items-start text-left">
                        <div class="flex items-center gap-1.5">
                            <span class="font-bold ${isSelected ? 'text-white' : 'text-slate-200'}">${day.nameBn}</span>
                            <span class="text-[11px] opacity-75">(${day.shortEn})</span>
                            ${isToday ? '<span class="w-2 h-2 rounded-full bg-emerald-400" title="আজকের দিন"></span>' : ''}
                        </div>
                        <span class="text-[10px] ${isSelected ? 'text-teal-300' : 'text-slate-500'}">
                            ${day.coreHours}h ${day.optionalHours ? `(+${day.optionalHours}h)` : ''} • ${pct}%
                        </span>
                    </div>
                `;
                container.appendChild(btn);
            });
        }

        function renderSelectedDayView() {
            const day = scheduleData[selectedDayIndex];
            const isToday = day.dayIndex === todayDayIndex;

            // Update Banner
            document.getElementById('bannerDayShort').textContent = day.shortEn;
            document.getElementById('selectedDayTitle').textContent = `${day.nameBn} (${day.nameEn})`;

            const todayBadge = document.getElementById('todayIndicatorBadge');
            if (isToday) {
                todayBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
                todayBadge.textContent = "আজকের রুটিন (Today)";
            } else {
                todayBadge.className = "px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700";
                todayBadge.textContent = "অন্যান্য দিন";
            }

            const optText = day.optionalHours > 0 ? ` (+${day.optionalHours} ঘণ্টা ঐচ্ছিক)` : '';
            document.getElementById('selectedDaySubtitle').textContent =
                `মূল লক্ষ্যমাত্রা: ${day.coreHours} ঘণ্টা${optText} • মোট ${day.tasks.length}টি টাইমার সেট করা আছে`;

            // Calculate Day Progress
            const totalSec = day.tasks.reduce((acc, t) => acc + (t.optional ? 0 : t.durationSec), 0);
            const doneSec = day.tasks.reduce((acc, t) => acc + (t.optional ? 0 : Math.min(t.durationSec, t.elapsedSec)), 0);
            const totalAllElapsed = day.tasks.reduce((acc, t) => acc + t.elapsedSec, 0);

            const pct = totalSec > 0 ? Math.min(100, Math.round((doneSec / totalSec) * 100)) : 0;
            const studiedHrs = (totalAllElapsed / 3600).toFixed(1);
            const targetHrs = day.coreHours.toFixed(1);

            document.getElementById('dayProgressText').textContent = `${studiedHrs}h / ${targetHrs}h (${pct}%)`;
            document.getElementById('dayProgressBar').style.width = `${pct}%`;

            // Ensure activeTaskId belongs to current selected day if not running on another day
            const currentActiveObj = findTaskById(activeTaskId);
            if (!currentActiveObj || (!isRunning && currentActiveObj.dayIndex !== selectedDayIndex)) {
                const candidate = day.tasks.find(t => !t.completed) || day.tasks[0];
                if (candidate) activeTaskId = candidate.id;
            }

            renderHeroTimer();
            renderTaskCards();
        }

        function renderHeroTimer() {
            const found = findTaskById(activeTaskId);
            if (!found) return;
            const { task } = found;
            const isLockedDay = selectedDayIndex !== todayDayIndex;

            const remainingSec = Math.max(0, task.durationSec - task.elapsedSec);
            const progressFraction = task.durationSec > 0 ? Math.min(1, task.elapsedSec / task.durationSec) : 0;
            const dashOffset = CIRCUMFERENCE * (1 - progressFraction);

            document.getElementById('activeTaskNameBn').textContent = task.titleBn;
            document.getElementById('activeTaskMeta').textContent =
                `নির্ধারিত সময়: ${formatHumanDurationBn(task.durationSec)} • ${task.optional ? 'ঐচ্ছিক (Optional)' : 'মূল রুটিন (Core)'}`;

            document.getElementById('heroTimeDisplay').textContent = formatHMS(remainingSec);
            document.getElementById('heroElapsedSub').textContent = `সম্পন্ন হয়েছে: ${formatHMS(task.elapsedSec)}`;

            const circle = document.getElementById('heroRingCircle');
            circle.style.strokeDasharray = `${CIRCUMFERENCE}`;
            circle.style.strokeDashoffset = `${dashOffset}`;

            // Hero Styling based on running state
            const heroCard = document.getElementById('heroTimerCard');
            const statusDot = document.getElementById('statusDot');
            const statusText = document.getElementById('statusText');
            const playIcon = document.getElementById('mainPlayIcon');
            const playText = document.getElementById('mainPlayText');
            const playButton = document.getElementById('mainPlayPauseBtn');

            if (isLockedDay && !isRunning) {
                heroCard.classList.remove('active-glow');
                statusDot.className = "w-2 h-2 rounded-full bg-slate-400";
                statusText.textContent = selectedDayIndex > todayDayIndex
                    ? "ভবিষ্যৎ দিনের টাইমার লক করা আছে"
                    : "আগের দিনের টাইমার শুধু দেখার জন্য";
                playIcon.className = "ph-fill ph-lock-key text-xl";
                playText.textContent = selectedDayIndex > todayDayIndex ? "দিন শুরু হলে চালু হবে" : "আগের দিন";
                document.title = "সাপ্তাহিক রুটিন ও এক্সপ্রেস টাইমার";
                document.getElementById('mainPlayPauseBtn').disabled = true;
                document.getElementById('mainPlayPauseBtn').classList.add('opacity-60', 'cursor-not-allowed');
            } else if (isRunning) {
                playButton.disabled = false;
                heroCard.classList.add('active-glow');
                statusDot.className = "w-2 h-2 rounded-full bg-teal-400 animate-ping";
                statusText.textContent = "টাইমার চলছে (Focusing...)";
                playIcon.className = "ph-fill ph-pause text-xl";
                playText.textContent = "বিরতি (Pause)";
                document.title = `⏳ ${formatHMS(remainingSec)} - ${task.titleEn}`;
                playButton.disabled = false;
                playButton.classList.remove('opacity-60', 'cursor-not-allowed');
            } else if (task.completed || remainingSec === 0) {
                playButton.disabled = true;
                heroCard.classList.remove('active-glow');
                statusDot.className = "w-2 h-2 rounded-full bg-emerald-400";
                statusText.textContent = "সম্পন্ন হয়েছে (Completed!)";
                playIcon.className = "ph-fill ph-check-circle text-xl";
                playText.textContent = "সম্পন্ন হয়েছে";
                document.title = "সাপ্তাহিক রুটিন ও এক্সপ্রেস টাইমার";
                playButton.disabled = false;
                playButton.classList.remove('opacity-60', 'cursor-not-allowed');
            } else {
                playButton.disabled = false;
                heroCard.classList.remove('active-glow');
                statusDot.className = "w-2 h-2 rounded-full bg-amber-400";
                statusText.textContent = task.elapsedSec > 0 ? "বিরতিতে আছে (Paused)" : "টাইমার প্রস্তুত (Ready)";
                playIcon.className = "ph-fill ph-play text-xl";
                playText.textContent = task.elapsedSec > 0 ? "চালিয়ে যান (Resume)" : "শুরু করুন (Start)";
                document.title = "সাপ্তাহিক রুটিন ও এক্সপ্রেস টাইমার";
                playButton.disabled = false;
                playButton.classList.remove('opacity-60', 'cursor-not-allowed');
            }
        }

        function renderTaskCards() {
            const day = scheduleData[selectedDayIndex];
            const container = document.getElementById('tasksListContainer');
            container.innerHTML = '';

            day.tasks.forEach((task) => {
                const isThisActive = task.id === activeTaskId;
                const isThisRunning = isThisActive && isRunning;
                const isLockedDay = day.dayIndex !== todayDayIndex;
                const remainingSec = Math.max(0, task.durationSec - task.elapsedSec);
                const pct = task.durationSec > 0 ? Math.min(100, Math.round((task.elapsedSec / task.durationSec) * 100)) : 0;
                const style = getCategoryStyle(task.category);

                const card = document.createElement('div');
                card.className = `glass-card rounded-2xl p-4 sm:p-5 transition-all border ${
                    isThisRunning
                        ? 'active-glow bg-slate-900/90'
                        : isThisActive
                        ? 'border-teal-500/40 bg-slate-900/75'
                        : 'border-slate-800/90 hover:border-slate-700'
                }`;

                card.innerHTML = `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <!-- Left Info -->
                        <div class="flex items-start gap-3.5">
                            <div class="w-11 h-11 rounded-xl ${style.bg} ${style.border} border flex items-center justify-center ${style.color} shrink-0 mt-0.5">
                                <i class="ph-duotone ${style.icon} text-2xl"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <h4 class="font-bold text-base sm:text-lg ${task.completed ? 'line-through text-slate-400' : 'text-white'}">
                                        ${task.titleBn}
                                    </h4>
                                    ${task.optional ? '<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">ঐচ্ছিক (Optional)</span>' : ''}
                                    ${task.completed ? '<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">✓ সম্পন্ন</span>' : ''}
                                </div>
                                <p class="text-xs text-slate-400 mt-0.5">
                                    মোট বরাদ্দ: <strong class="text-slate-200">${formatHumanDurationBn(task.durationSec)}</strong> • সম্পন্ন: ${pct}%
                                </p>
                            </div>
                        </div>

                        <!-- Right Timer & Action Button -->
                        <div class="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-800/80">
                            <div class="text-left sm:text-right">
                                <span class="block text-[10px] uppercase tracking-wider text-slate-400">বাকি সময়</span>
                                <span class="font-mono text-lg sm:text-xl font-bold ${isThisRunning ? 'text-teal-300' : 'text-white'}">
                                    ${formatHMS(remainingSec)}
                                </span>
                            </div>

                            <button ${isLockedDay ? 'disabled' : ''} onclick="startOrToggleSpecificTask('${task.id}')" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition shadow-md ${
                                isLockedDay
                                    ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
                                    : isThisRunning
                                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                                    : task.completed || remainingSec === 0
                                    ? 'bg-slate-800 text-emerald-300 border border-emerald-500/30 cursor-not-allowed'
                                    : 'bg-teal-500 hover:bg-teal-400 text-slate-950'
                            }">
                                <i class="ph-fill ${isLockedDay ? 'ph-lock-key' : isThisRunning ? 'ph-pause' : task.completed || remainingSec === 0 ? 'ph-check-circle' : 'ph-play'} text-base"></i>
                                <span>${isLockedDay ? (day.dayIndex > todayDayIndex ? 'দিন শুরু হলে' : 'শুধু দেখুন') : isThisRunning ? 'বিরতি' : task.completed || remainingSec === 0 ? 'সম্পন্ন' : task.elapsedSec > 0 ? 'চালু করুন' : 'শুরু করুন'}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Individual Progress Bar -->
                    <div class="mt-3.5 w-full h-1.5 bg-slate-800/90 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-300" style="width: ${pct}%"></div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        /**************************************************************
         * 5. TIMER ENGINE & CONTROLS
         **************************************************************/
        function findTaskById(taskId) {
            for (const day of scheduleData) {
                const task = day.tasks.find(t => t.id === taskId);
                if (task) return { dayIndex: day.dayIndex, task };
            }
            return null;
        }

        function isFutureDay(dayIndex) {
            return dayIndex > todayDayIndex;
        }

        function isLockedDay(dayIndex) {
            return dayIndex !== todayDayIndex;
        }

        function selectDay(dayIdx) {
            selectedDayIndex = dayIdx;
            const day = scheduleData[selectedDayIndex];
            // If timer isn't actively running, switch focus preview to this day's first incomplete task
            if (!isRunning) {
                const nextTask = day.tasks.find(t => !t.completed) || day.tasks[0];
                if (nextTask) activeTaskId = nextTask.id;
            }
            renderDayTabs();
            renderSelectedDayView();
        }

        function startOrToggleSpecificTask(taskId) {
            const target = findTaskById(taskId);
            if (!target) return;
            if (isLockedDay(target.dayIndex)) {
                showToast(target.dayIndex > todayDayIndex
                    ? "এই দিনের টাইমার দিন শুরু হলে চালু করা যাবে।"
                    : "আগের দিনের টাইমার শুধু দেখা যাবে, চালু করা যাবে না।");
                return;
            }
            if (activeTaskId === taskId) {
                toggleActiveTimer();
            } else {
                // Switch to this task and start immediately
                pauseTimerEngine();
                const found = findTaskById(taskId);
                if (!found) return;
                if (found.task.completed || found.task.elapsedSec >= found.task.durationSec) return;
                activeTaskId = taskId;
                startTimerEngine();
                renderSelectedDayView();
            }
        }

        function toggleActiveTimer() {
            const found = findTaskById(activeTaskId);
            if (!found) return;
            if (isLockedDay(found.dayIndex) && !isRunning) {
                showToast(found.dayIndex > todayDayIndex
                    ? "এই দিনের টাইমার দিন শুরু হলে চালু করা যাবে।"
                    : "আগের দিনের টাইমার শুধু দেখা যাবে, চালু করা যাবে না।");
                return;
            }

            if (isRunning) {
                pauseTimerEngine();
            } else {
                if (found.task.completed || found.task.elapsedSec >= found.task.durationSec) return;
                startTimerEngine();
            }
            renderSelectedDayView();
        }

        function startTimerEngine() {
            if (timerInterval) clearInterval(timerInterval);
            isRunning = true;
            lastTickTimestamp = Date.now();
            sessionStartTimestamp = lastTickTimestamp;
            const active = findTaskById(activeTaskId);
            sessionInitialElapsedSec = active ? active.task.elapsedSec : 0;
            saveActiveTimerState();

            timerInterval = setInterval(() => {
                tickTimer(Date.now());
            }, 1000);
        }

        function tickTimer(now) {
            if (!isRunning || !lastTickTimestamp) return;
            const deltaSec = Math.floor((now - lastTickTimestamp) / 1000);
            if (deltaSec <= 0) return;
            lastTickTimestamp += deltaSec * 1000;

            const found = findTaskById(activeTaskId);
            if (!found) {
                pauseTimerEngine();
                return;
            }

            const { task } = found;
            task.elapsedSec += deltaSec;

            if (task.elapsedSec >= task.durationSec) {
                task.elapsedSec = task.durationSec;
                finishActiveSession(now);
                task.completed = true;
                isRunning = false;
                if (timerInterval) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                }
                saveActiveTimerState();
                saveState();
                playAlarmSound();
                showToast(`🎉 অভিনন্দন! "${task.titleBn}"-এর নির্ধারিত সময় সম্পন্ন হয়েছে!`);
                renderDayTabs();
                renderSelectedDayView();
                return;
            }

            saveActiveTimerState();
            saveState();
            renderHeroTimer();
            renderTaskCards();
        }

        function pauseTimerEngine() {
            if (isRunning) finishActiveSession(Date.now());
            isRunning = false;
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
            saveActiveTimerState();
            saveState();
        }

        function finishActiveSession(endTimestamp) {
            if (!sessionStartTimestamp || !activeTaskId) return;
            const found = findTaskById(activeTaskId);
            if (!found) {
                sessionStartTimestamp = null;
                return;
            }

            const task = found.task;
            const maxSessionSeconds = Math.max(0, task.durationSec - sessionInitialElapsedSec);
            const durationSec = Math.min(
                maxSessionSeconds,
                Math.max(0, Math.round((endTimestamp - sessionStartTimestamp) / 1000))
            );

            if (durationSec > 0) {
                if (!Array.isArray(task.sessions)) task.sessions = [];
                task.sessions.push({
                    startAt: sessionStartTimestamp,
                    endAt: endTimestamp,
                    durationSec
                });
            }

            sessionStartTimestamp = null;
            sessionInitialElapsedSec = 0;
        }

        function adjustActiveTime(secondsDelta) {
            const found = findTaskById(activeTaskId);
            if (!found) return;
            const newDur = Math.max(300, found.task.durationSec + secondsDelta);
            found.task.durationSec = newDur;
            if (found.task.elapsedSec < newDur) {
                found.task.completed = false;
            }
            saveState();
            renderSelectedDayView();
            const sign = secondsDelta > 0 ? '+' : '';
            showToast(`টাইমার ${sign}${Math.round(secondsDelta / 60)} মিনিট সমন্বয় করা হয়েছে।`);
        }

        function startNextIncompleteTask() {
            const day = scheduleData[selectedDayIndex];
            const nextTask = day.tasks.find(t => !t.completed && t.id !== activeTaskId) || day.tasks.find(t => !t.completed);
            if (nextTask) {
                startOrToggleSpecificTask(nextTask.id);
                showToast(`পরবর্তী বিষয়: ${nextTask.titleBn}`);
            } else {
                showToast("এই দিনের সব বিষয় ইতিমধ্যে সম্পন্ন হয়েছে!");
            }
        }

        /**************************************************************
         * 6. MODALS & CUSTOM ACTIONS
         **************************************************************/
        function openWeeklyModal() {
            const container = document.getElementById('weeklySummaryContent');
            container.innerHTML = '';

            scheduleData.forEach(day => {
                const isToday = day.dayIndex === todayDayIndex;
                const row = document.createElement('div');
                row.className = `p-3.5 rounded-2xl border ${isToday ? 'bg-teal-950/30 border-teal-500/40' : 'bg-slate-900/80 border-slate-800'}`;

                const pills = day.tasks.map(t => `
                    <span class="px-2.5 py-1 rounded-lg text-xs bg-slate-800 text-slate-200 border border-slate-700 inline-flex items-center gap-1">
                        ${t.completed ? '<i class="ph-fill ph-check-circle text-emerald-400"></i>' : '<i class="ph ph-clock text-teal-400"></i>'}
                        <span>${t.titleBn} (${formatHumanDurationBn(t.durationSec)})</span>
                    </span>
                `).join('');

                row.innerHTML = `
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-white">${day.nameBn} (${day.nameEn})</span>
                            ${isToday ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300">আজ</span>' : ''}
                        </div>
                        <span class="text-xs font-mono text-teal-400 font-semibold">
                            মূল: ${day.coreHours}h ${day.optionalHours ? `(+${day.optionalHours}h ঐচ্ছিক)` : ''}
                        </span>
                    </div>
                    <div class="flex flex-wrap gap-1.5">${pills}</div>
                `;
                container.appendChild(row);
            });

            document.getElementById('weeklyModal').classList.remove('hidden');
            document.getElementById('weeklyModal').classList.add('flex');
        }

        function closeWeeklyModal() {
            document.getElementById('weeklyModal').classList.add('hidden');
            document.getElementById('weeklyModal').classList.remove('flex');
        }

        function openStudyLogModal() {
            studyLogDayIndex = selectedDayIndex;
            renderStudyLog();
            document.getElementById('studyLogModal').classList.remove('hidden');
            document.getElementById('studyLogModal').classList.add('flex');
        }

        function closeStudyLogModal() {
            document.getElementById('studyLogModal').classList.add('hidden');
            document.getElementById('studyLogModal').classList.remove('flex');
        }

        function renderStudyLog() {
            const tabs = document.getElementById('studyLogDayTabs');
            const content = document.getElementById('studyLogContent');
            tabs.innerHTML = '';
            scheduleData.forEach(day => {
                const button = document.createElement('button');
                const isSelected = day.dayIndex === studyLogDayIndex;
                button.className = `px-3 py-1.5 rounded-xl border text-xs whitespace-nowrap ${
                    isSelected
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-700'
                }`;
                button.textContent = `${day.nameBn}${day.dayIndex === todayDayIndex ? ' (আজ)' : ''}`;
                button.onclick = () => {
                    studyLogDayIndex = day.dayIndex;
                    renderStudyLog();
                };
                tabs.appendChild(button);
            });

            const day = scheduleData[studyLogDayIndex];
            const totalSeconds = getDayLoggedSeconds(day);
            const sessions = day.tasks.flatMap(task => (task.sessions || []).map(session => ({
                ...session,
                taskTitle: task.titleBn
            }))).sort((a, b) => a.startAt - b.startAt);

            content.innerHTML = `
                <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
                    <div class="flex items-center justify-between gap-3">
                        <div>
                            <h4 class="font-bold text-white">${day.nameBn} (${day.nameEn})</h4>
                            <p class="text-xs text-slate-400 mt-1">রেকর্ড করা মোট স্টাডি সময়</p>
                        </div>
                        <span class="font-mono font-bold text-indigo-300">${formatHumanDurationBn(totalSeconds)}</span>
                    </div>
                </div>
                ${sessions.length === 0
                    ? '<div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center text-sm text-slate-400">এই দিনের কোনো সম্পূর্ণ স্টাডি সেশন রেকর্ড নেই।</div>'
                    : sessions.map((session, index) => `
                        <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                            <div class="flex items-center justify-between gap-3">
                                <div>
                                    <p class="font-semibold text-white">${index + 1}. ${session.taskTitle}</p>
                                    <p class="text-xs text-slate-400 mt-1">${formatSessionDate(session.startAt)}</p>
                                </div>
                                <span class="font-mono text-teal-300">${formatHumanDurationBn(session.durationSec)}</span>
                            </div>
                            <div class="grid grid-cols-2 gap-3 mt-3 text-xs">
                                <div class="rounded-xl bg-slate-800/80 p-2.5">
                                    <span class="block text-slate-500">শুরু</span>
                                    <strong class="text-slate-200">${formatClockTime(session.startAt)}</strong>
                                </div>
                                <div class="rounded-xl bg-slate-800/80 p-2.5">
                                    <span class="block text-slate-500">শেষ</span>
                                    <strong class="text-slate-200">${formatClockTime(session.endAt)}</strong>
                                </div>
                            </div>
                        </div>
                    `).join('')}
            `;
        }

        /**************************************************************
         * 7. WEB AUDIO API ALARM & TOAST NOTIFICATIONS
         **************************************************************/
        function playAlarmSound() {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioCtx();
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 pleasant chime
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.16);

                    gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.16);
                    gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + idx * 0.16 + 0.04);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.16 + 0.45);

                    osc.connect(gain);
                    gain.connect(ctx.destination);

                    osc.start(ctx.currentTime + idx * 0.16);
                    osc.stop(ctx.currentTime + idx * 0.16 + 0.48);
                });
            } catch (e) {
                console.warn("Audio play blocked or failed:", e);
            }
        }

        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = "glass-card px-4 py-3 rounded-2xl border border-teal-500/40 text-white text-xs sm:text-sm shadow-xl flex items-center gap-2.5 transition-all duration-300";
            toast.innerHTML = `
                <i class="ph-fill ph-check-circle text-teal-400 text-lg"></i>
                <span>${message}</span>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 300);
            }, 3200);
        }

        document.addEventListener('visibilitychange', () => {
            if (isRunning) {
                tickTimer(Date.now());
                saveActiveTimerState();
                saveState();
            }
        });

        window.addEventListener('beforeunload', () => {
            if (isRunning) {
                tickTimer(Date.now());
                saveActiveTimerState();
                saveState();
            }
        });

        window.onload = initApp;
