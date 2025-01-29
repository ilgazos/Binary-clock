const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const timeRows = ref([[], [], []]);

        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString(2).padStart(6, '0').split('');
            const minutes = now.getMinutes().toString(2).padStart(6, '0').split('');
            const seconds = now.getSeconds().toString(2).padStart(6, '0').split('');
            timeRows.value = [hours, minutes, seconds];
        };

        onMounted(() => {
            updateTime();
            setInterval(updateTime, 1000);
        });

        return { timeRows };
    },
}).mount('#app');
