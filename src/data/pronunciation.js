// Chinese Pronunciation Guide with Vietnamese Reference
// Organized by sound groups

export const pronunciationGroups = [
    // --- NHÓM THANH MẪU (INITIALS) ---
    {
        id: 'initials-labial',
        category: 'Initials',
        title: 'Nhóm B, P, M, F',
        description: 'Âm môi (Labial sounds)',
        sounds: [
            { pinyin: 'b', vietnameseGuide: 'Giống "p" (không bật hơi) hoặc "b" nhẹ', tonguePosition: 'Môi khép hờ', mouthShape: 'Hai môi mím lại rồi mở ra', examples: [{ char: '八', pinyin: 'bā', vietnamese: 'Tám', pronunciation: 'pa' }], tips: 'Giống chữ "p" trong "ba-pa" nhưng không rung dây thanh quản mạnh.' },
            { pinyin: 'p', vietnameseGuide: 'Giống "p" nhưng bật hơi rất mạnh', tonguePosition: 'Môi khép chặt', mouthShape: 'Bật mạnh luồng hơi từ miệng ra', examples: [{ char: '怕', pinyin: 'pà', vietnamese: 'Sợ', pronunciation: 'p`a (bật hơi)' }], tips: 'Để một tờ giấy trước miệng, tờ giấy phải bay mạnh khi phát âm.' },
            { pinyin: 'm', vietnameseGuide: 'Giống "m" trong tiếng Việt', tonguePosition: 'Môi khép lại', mouthShape: 'Luồng hơi đi qua mũi', examples: [{ char: '妈', pinyin: 'mā', vietnamese: 'Mẹ', pronunciation: 'ma' }], tips: 'Phát âm hoàn toàn giống tiếng Việt.' },
            { pinyin: 'f', vietnameseGuide: 'Giống "ph" trong tiếng Việt', tonguePosition: 'Răng trên chạm môi dưới', mouthShape: 'Đẩy hơi qua khe răng môi', examples: [{ char: '发', pinyin: 'fā', vietnamese: 'Phát', pronunciation: 'pha' }], tips: 'Phát âm hoàn toàn giống tiếng Việt.' }
        ]
    },
    {
        id: 'initials-alveolar',
        category: 'Initials',
        title: 'Nhóm D, T, N, L',
        description: 'Âm đầu lưỡi (Alveolar sounds)',
        sounds: [
            { pinyin: 'd', vietnameseGuide: 'Giống "t" trong tiếng Việt', tonguePosition: 'Đầu lưỡi chạm chân răng trên', mouthShape: 'Mở tự nhiên, không bật hơi', examples: [{ char: '大', pinyin: 'dà', vietnamese: 'Lớn', pronunciation: 'ta' }], tips: 'Người Việt hay nhầm với "đ", thực tế nó giống "t" (như trong "tin").' },
            { pinyin: 't', vietnameseGuide: 'Giống "th" trong tiếng Việt', tonguePosition: 'Đầu lưỡi chạm chân răng trên', mouthShape: 'Bật hơi mạnh', examples: [{ char: '他', pinyin: 'tā', vietnamese: 'Anh ấy', pronunciation: 'tha' }], tips: 'Giống chữ "th" nhưng luồng hơi đẩy ra mạnh và dứt khoát hơn.' },
            { pinyin: 'n', vietnameseGuide: 'Giống "n" trong tiếng Việt', tonguePosition: 'Đầu lưỡi chạm chân răng trên', mouthShape: 'Hơi thoát ra đường mũi', examples: [{ char: '你', pinyin: 'nǐ', vietnamese: 'Bạn', pronunciation: 'ni' }], tips: 'Giống tiếng Việt.' },
            { pinyin: 'l', vietnameseGuide: 'Giống "l" trong tiếng Việt', tonguePosition: 'Đầu lưỡi chạm lợi trên', mouthShape: 'Hơi thoát ra hai bên cạnh lưỡi', examples: [{ char: '来', pinyin: 'lái', vietnamese: 'Đến', pronunciation: 'lai' }], tips: 'Giống tiếng Việt.' }
        ]
    },
    {
        id: 'initials-velar',
        category: 'Initials',
        title: 'Nhóm G, K, H',
        description: 'Âm gốc lưỡi (Velar sounds)',
        sounds: [
            { pinyin: 'g', vietnameseGuide: 'Giống "c/k" trong tiếng Việt', tonguePosition: 'Gốc lưỡi nâng cao chạm vòm mềm', mouthShape: 'Không bật hơi', examples: [{ char: '个', pinyin: 'gè', vietnamese: 'Cái', pronunciation: 'cơ' }], tips: 'Không phải âm "g" (gờ), mà là âm "c" (như trong "ca").' },
            { pinyin: 'k', vietnameseGuide: 'Giống "kh" nhưng bật hơi mạnh', tonguePosition: 'Gốc lưỡi nâng cao', mouthShape: 'Bật hơi mạnh từ cuống họng', examples: [{ char: '看', pinyin: 'kàn', vietnamese: 'Xem', pronunciation: 'kh`an' }], tips: 'Khác với "kh" tiếng Việt (âm xát), "k" Pinyin là âm bật hơi dứt khoát.' },
            { pinyin: 'h', vietnameseGuide: 'Giữa "h" và "kh" của tiếng Việt', tonguePosition: 'Gốc lưỡi hơi nâng cao', mouthShape: 'Tạo ma sát nhẹ ở cuống họng', examples: [{ char: '好', pinyin: 'hǎo', vietnamese: 'Tốt', pronunciation: 'hao' }], tips: 'Phát âm nặng hơn "h" tiếng Việt một chút nhưng nhẹ hơn "kh".' }
        ]
    },
    {
        id: 'initials-palatal',
        category: 'Initials',
        title: 'Nhóm J, Q, X',
        description: 'Âm mặt lưỡi (Palatal sounds)',
        sounds: [
            { pinyin: 'j', vietnameseGuide: 'Giống "ch" nhưng mặt lưỡi áp sát vòm miệng', tonguePosition: 'Mặt lưỡi áp sát lợi trên', mouthShape: 'Môi hơi dẹt sang hai bên', examples: [{ char: '家', pinyin: 'jiā', vietnamese: 'Nhà', pronunciation: 'chi-a' }], tips: 'Cười nhẹ khi phát âm âm này để mặt lưỡi dẹt ra đúng vị trí.' },
            { pinyin: 'q', vietnameseGuide: 'Giống "q" nhưng bật hơi mạnh (như "ch" bật hơi)', tonguePosition: 'Giống j nhưng có luồng hơi mạnh', mouthShape: 'Môi dẹt, bật hơi dứt khoát', examples: [{ char: '七', pinyin: 'qī', vietnamese: 'Bảy', pronunciation: 'ch`i' }], tips: 'Ép lưỡi chặt rồi bật luồng hơi mạnh ra khe lưỡi.' },
            { pinyin: 'x', vietnameseGuide: 'Giống "x" (nhẹ)', tonguePosition: 'Mặt lưỡi tiếp cận vòm miệng cứng', mouthShape: 'Môi dẹt, hơi thoát ra qua khe lưỡi', examples: [{ char: '小', pinyin: 'xiǎo', vietnamese: 'Nhỏ', pronunciation: 'si-ao' }], tips: 'Đầu lưỡi đặt ở chân răng dưới, mặt lưỡi nâng lên cao.' }
        ]
    },
    {
        id: 'initials-retroflex',
        category: 'Initials',
        title: 'Nhóm Zh, Ch, Sh, R',
        description: 'Âm cuốn lưỡi (Retroflex sounds)',
        sounds: [
            { pinyin: 'zh', vietnameseGuide: 'Giống "tr" nhưng cuốn lưỡi mạnh, không bật hơi', tonguePosition: 'Đầu lưỡi uốn lên chạm vòm miệng cứng', mouthShape: 'Môi hơi tròn', examples: [{ char: '这', pinyin: 'zhè', vietnamese: 'Này', pronunciation: 'trơ' }], tips: 'Uốn lưỡi nhưng không để hơi bật ra mạnh.' },
            { pinyin: 'ch', vietnameseGuide: 'Giống "tr" nhưng cuốn lưỡi và bật hơi mạnh', tonguePosition: 'Giống zh nhưng đẩy hơi mạnh', mouthShape: 'Môi hơi tròn, bật hơi', examples: [{ char: '吃', pinyin: 'chī', vietnamese: 'Ăn', pronunciation: 'tr`ư' }], tips: 'Đây là âm khó nhất, cần uốn lưỡi và đẩy hơi mạnh cùng lúc.' },
            { pinyin: 'sh', vietnameseGuide: 'Giống "s" (nặng) nhưng uốn lưỡi', tonguePosition: 'Đầu lưỡi uốn sát vòm miệng cứng', mouthShape: 'Môi hơi tròn, đẩy hơi ma sát', examples: [{ char: '是', pinyin: 'shì', vietnamese: 'Là', pronunciation: 'sư' }], tips: 'Giống "s" trong tiếng Việt miền Nam hoặc tiếng Anh "sh".' },
            { pinyin: 'r', vietnameseGuide: 'Giống "r" nhưng không rung lưỡi', tonguePosition: 'Đầu lưỡi uốn gần vòm cứng', mouthShape: 'Môi hơi tròn', examples: [{ char: '人', pinyin: 'rén', vietnamese: 'Người', pronunciation: 'rân' }], tips: 'Khác "r" tiếng Việt ở chỗ không được rung đầu lưỡi.' }
        ]
    },
    {
        id: 'initials-dental',
        category: 'Initials',
        title: 'Nhóm Z, C, S',
        description: 'Âm đầu lưỡi trước (Dental sounds)',
        sounds: [
            { pinyin: 'z', vietnameseGuide: 'Giống "ch" nhưng lưỡi chạm răng', tonguePosition: 'Đầu lưỡi chạm mặt sau răng trên', mouthShape: 'Môi dẹt (như đang cười)', examples: [{ char: '在', pinyin: 'zài', vietnamese: 'Ở', pronunciation: 'ts-ai' }], tips: 'Phát âm như "ch" nhưng răng khép lại, đầu lưỡi đẩy hơi qua kẽ răng.' },
            { pinyin: 'c', vietnameseGuide: 'Giống "z" nhưng bật hơi mạnh', tonguePosition: 'Đầu lưỡi chạm răng trên', mouthShape: 'Môi dẹt, bật hơi dứt khoát', examples: [{ char: '从', pinyin: 'cóng', vietnamese: 'Từ', pronunciation: 'tsh-ung' }], tips: 'Giống tiếng xì của lốp xe bị thủng.' },
            { pinyin: 's', vietnameseGuide: 'Giống "x" (nhẹ) của tiếng Việt', tonguePosition: 'Đầu lưỡi gần mặt sau răng trên', mouthShape: 'Môi dẹt, hơi thoát qua kẽ răng', examples: [{ char: '三', pinyin: 'sān', vietnamese: 'Ba', pronunciation: 'xan' }], tips: 'Lưỡi đặt thẳng, không uốn.' }
        ]
    },

    // --- NHÓM VẬN MẪU (FINALS) ---
    {
        id: 'finals-simple',
        category: 'Finals',
        title: 'Vần Đơn',
        description: '6 nguyên âm cơ bản',
        sounds: [
            { pinyin: 'a', vietnameseGuide: 'Giống "a"', tonguePosition: 'Lưỡi thấp', mouthShape: 'Mở rộng', examples: [{ char: '啊', pinyin: 'ā', vietnamese: 'A', pronunciation: 'a' }] },
            { pinyin: 'o', vietnameseGuide: 'Giống "ô" (hơi hướng "uo")', tonguePosition: 'Lưỡi cao vừa', mouthShape: 'Tròn môi', examples: [{ char: '我', pinyin: 'wǒ', vietnamese: 'Tôi', pronunciation: 'uô' }] },
            { pinyin: 'e', vietnameseGuide: 'Giống "ơ" hoặc "ưa"', tonguePosition: 'Lưỡi cao vừa', mouthShape: 'Dẹt môi', examples: [{ char: '饿', pinyin: 'è', vietnamese: 'Đói', pronunciation: 'ưa' }] },
            { pinyin: 'i', vietnameseGuide: 'Giống "i"', tonguePosition: 'Lưỡi cao', mouthShape: 'Dẹt môi', examples: [{ char: '一', pinyin: 'yī', vietnamese: 'Một', pronunciation: 'i' }] },
            { pinyin: 'u', vietnameseGuide: 'Giống "u"', tonguePosition: 'Lưỡi cao', mouthShape: 'Tròn môi', examples: [{ char: '五', pinyin: 'wǔ', vietnamese: 'Năm', pronunciation: 'u' }] },
            { pinyin: 'ü', vietnameseGuide: 'Giống "uy"', tonguePosition: 'Giống "i" nhưng môi tròn', mouthShape: 'Tròn môi hết cỡ', examples: [{ char: '鱼', pinyin: 'yú', vietnamese: 'Cá', pronunciation: 'uy' }], tips: 'Giữ khẩu hình chữ "u" nhưng phát âm chữ "i".' }
        ]
    },
    {
        id: 'finals-nasal',
        category: 'Finals',
        title: 'Vần Mũi (Nasal)',
        description: 'Kết thúc bằng -n hoặc -ng',
        sounds: [
            { pinyin: 'an', vietnameseGuide: 'Giống "an"', tonguePosition: 'Kết thúc đầu lưỡi chạm lợi', mouthShape: 'Mở', examples: [{ char: '安', pinyin: 'ān', vietnamese: 'An', pronunciation: 'an' }] },
            { pinyin: 'en', vietnameseGuide: 'Giống "ân"', tonguePosition: 'Lưỡi cao vừa', mouthShape: 'Tự nhiên', examples: [{ char: '人', pinyin: 'rén', vietnamese: 'Người', pronunciation: 'rân' }] },
            { pinyin: 'ang', vietnameseGuide: 'Giống "ang"', tonguePosition: 'Gốc lưỡi chạm vòm mềm', mouthShape: 'Mở rộng', examples: [{ char: '忙', pinyin: 'máng', vietnamese: 'Bận', pronunciation: 'mang' }] },
            { pinyin: 'eng', vietnameseGuide: 'Giống "âng" (không phải "ăng")', tonguePosition: 'Gốc lưỡi nâng', mouthShape: 'Tự nhiên', examples: [{ char: '能', pinyin: 'néng', vietnamese: 'Có thể', pronunciation: 'nâng' }], tips: 'Đừng đọc thành "năng", hãy đọc là "nâng".' },
            { pinyin: 'ong', vietnameseGuide: 'Giống "ung" (nhưng âm vang hơn)', tonguePosition: 'Gốc lưỡi nâng', mouthShape: 'Tròn môi', examples: [{ char: '红', pinyin: 'hóng', vietnamese: 'Đỏ', pronunciation: 'hung' }] }
        ]
    },
    {
        id: 'finals-er',
        category: 'Finals',
        title: 'Vần Đặc Biệt',
        description: 'Âm Erhua',
        sounds: [
            { pinyin: 'er', vietnameseGuide: 'Giống "ơ" + uốn lưỡi', tonguePosition: 'Lưỡi ở vị trí "e" rồi uốn lên ngay', mouthShape: 'Mở vừa', examples: [{ char: '二', pinyin: 'èr', vietnamese: 'Hai', pronunciation: 'ơ-r' }], tips: 'Không kết hợp với phụ âm nào (trừ trường hợp âm cuốn lưỡi hóa).' }
        ]
    },


    {
        id: 'finals-group-i',
        category: 'Finals',
        title: 'Nhóm Vận mẫu bắt đầu bằng "i"',
        description: 'Âm tề xỉ (Finals starting with i)',
        sounds: [
            { pinyin: 'ia', vietnameseGuide: 'Giống "ia" (i-a)', tonguePosition: 'Lưỡi cao rồi hạ thấp', mouthShape: 'Dẹt sang mở rộng', examples: [{ char: '家', pinyin: 'jiā', vietnamese: 'Nhà', pronunciation: 'chi-a' }] },
            { pinyin: 'ie', vietnameseGuide: 'Giống "iê" trong tiếng Việt', tonguePosition: 'Lưỡi cao rồi hạ vừa', mouthShape: 'Dẹt sang mở vừa', examples: [{ char: '姐', pinyin: 'jiě', vietnamese: 'Chị', pronunciation: 'chi-ê' }] },
            { pinyin: 'iao', vietnameseGuide: 'Giống "i-ao"', tonguePosition: 'i rồi chuyển nhanh sang ao', mouthShape: 'Dẹt sang tròn môi', examples: [{ char: '小', pinyin: 'xiǎo', vietnamese: 'Nhỏ', pronunciation: 'si-ao' }] },
            { pinyin: 'iu', vietnameseGuide: 'Giống "i-ô-u" (đọc nhanh thành "iêu")', tonguePosition: 'i rồi chuyển sang ou', mouthShape: 'Dẹt sang tròn môi', examples: [{ char: '六', pinyin: 'liù', vietnamese: 'Sáu', pronunciation: 'li-ô-u' }], tips: 'Thực chất là iou nhưng viết gọn thành iu.' },
            { pinyin: 'ian', vietnameseGuide: 'Giống "iên" (KHÔNG PHẢI i-an)', tonguePosition: 'i rồi chuyển sang en', mouthShape: 'Dẹt sang tự nhiên', examples: [{ char: '天', pinyin: 'tiān', vietnamese: 'Trời', pronunciation: 'thiên' }], tips: 'Đây là lỗi sai phổ biến nhất, nhớ đọc là "iên".' },
            { pinyin: 'in', vietnameseGuide: 'Giống "in" trong tiếng Việt', tonguePosition: 'Đầu lưỡi chạm răng trên', mouthShape: 'Dẹt môi', examples: [{ char: '你', pinyin: 'nǐ', vietnamese: 'Bạn', pronunciation: 'ni' }] },
            { pinyin: 'iang', vietnameseGuide: 'Giống "i-ang"', tonguePosition: 'i rồi chuyển sang ang', mouthShape: 'Dẹt sang mở rộng', examples: [{ char: '亮', pinyin: 'liàng', vietnamese: 'Sáng', pronunciation: 'li-ang' }] },
            { pinyin: 'ing', vietnameseGuide: 'Giống "inh" trong tiếng Việt', tonguePosition: 'Gốc lưỡi nâng cao', mouthShape: 'Dẹt môi', examples: [{ char: '明', pinyin: 'míng', vietnamese: 'Sáng', pronunciation: 'mình' }] },
            { pinyin: 'iong', vietnameseGuide: 'Giống "i-ung"', tonguePosition: 'i rồi chuyển sang ong', mouthShape: 'Dẹt sang tròn môi', examples: [{ char: '兄', pinyin: 'xiōng', vietnamese: 'Anh', pronunciation: 'si-ung' }] }
        ]
    },
    {
        id: 'finals-group-u',
        category: 'Finals',
        title: 'Nhóm Vận mẫu bắt đầu bằng "u"',
        description: 'Âm hợp khẩu (Finals starting with u)',
        sounds: [
            { pinyin: 'ua', vietnameseGuide: 'Giống "oa" trong tiếng Việt', tonguePosition: 'u rồi chuyển sang a', mouthShape: 'Tròn sang mở rộng', examples: [{ char: '花', pinyin: 'huā', vietnamese: 'Hoa', pronunciation: 'hoa' }] },
            { pinyin: 'uo', vietnameseGuide: 'Giống "uô" trong tiếng Việt', tonguePosition: 'u rồi chuyển sang o', mouthShape: 'Luôn giữ tròn môi', examples: [{ char: '过', pinyin: 'guò', vietnamese: 'Qua', pronunciation: 'cuô' }] },
            { pinyin: 'uai', vietnameseGuide: 'Giống "oai" trong tiếng Việt', tonguePosition: 'u-a-i', mouthShape: 'Tròn môi sang dẹt', examples: [{ char: '快', pinyin: 'kuài', vietnamese: 'Nhanh', pronunciation: 'khoai' }] },
            { pinyin: 'ui', vietnameseGuide: 'Giống "uây" trong tiếng Việt', tonguePosition: 'u rồi chuyển sang ei', mouthShape: 'Tròn sang dẹt', examples: [{ char: '回', pinyin: 'huí', vietnamese: 'Về', pronunciation: 'huây' }], tips: 'Viết gọn của uei.' },
            { pinyin: 'uan', vietnameseGuide: 'Giống "oan" trong tiếng Việt', tonguePosition: 'u rồi chuyển sang an', mouthShape: 'Tròn sang tự nhiên', examples: [{ char: '端', pinyin: 'duān', vietnamese: 'Đoan', pronunciation: 'toan' }] },
            { pinyin: 'un', vietnameseGuide: 'Giống "uân" trong tiếng Việt', tonguePosition: 'u rồi chuyển sang en', mouthShape: 'Tròn môi', examples: [{ char: '论', pinyin: 'lùn', vietnamese: 'Luận', pronunciation: 'luân' }], tips: 'Viết gọn của uen.' },
            { pinyin: 'uang', vietnameseGuide: 'Giống "oang" trong tiếng Việt', tonguePosition: 'u-a-ng', mouthShape: 'Tròn sang mở rộng', examples: [{ char: '黄', pinyin: 'huáng', vietnamese: 'Vàng', pronunciation: 'hoang' }] },
            { pinyin: 'ueng', vietnameseGuide: 'Giống "uâng"', tonguePosition: 'u rồi chuyển sang eng', mouthShape: 'Tròn môi', examples: [{ char: '翁', pinyin: 'wēng', vietnamese: 'Ông', pronunciation: 'uâng' }], tips: 'Chỉ đứng độc lập, không đi kèm phụ âm.' }
        ]
    },
    {
        id: 'finals-group-yu',
        category: 'Finals',
        title: 'Nhóm Vận mẫu bắt đầu bằng "ü"',
        description: 'Âm tạt khẩu (Finals starting with ü)',
        sounds: [
            { pinyin: 'üe', vietnameseGuide: 'Giống "uyê" (u-y-ê)', tonguePosition: 'ü rồi chuyển sang e', mouthShape: 'Tròn môi sang hơi dẹt', examples: [{ char: '月', pinyin: 'yuè', vietnamese: 'Trăng', pronunciation: 'uyê' }] },
            { pinyin: 'üan', vietnameseGuide: 'Giống "uyên" (u-y-ê-n)', tonguePosition: 'ü rồi chuyển sang an', mouthShape: 'Luôn giữ tròn môi', examples: [{ char: '元', pinyin: 'yuán', vietnamese: 'Tệ', pronunciation: 'uyên' }], tips: 'Đọc là "uyên", không phải "u-an".' },
            { pinyin: 'ün', vietnameseGuide: 'Giống "uyn" trong tiếng Việt', tonguePosition: 'ü rồi chuyển sang n', mouthShape: 'Tròn môi', examples: [{ char: '云', pinyin: 'yún', vietnamese: 'Mây', pronunciation: 'uyn' }] }
        ]
    },

    // --- THANH ĐIỆU (TONES) ---
    {
        id: 'tones',
        category: 'Tones',
        title: 'Thanh Điệu',
        description: '4 thanh chính và 1 thanh nhẹ',
        sounds: [
            { pinyin: '0 (ma)', vietnameseGuide: 'Thanh nhẹ: Đọc ngắn và nhẹ', examples: [{ char: '吗', pinyin: 'ma', vietnamese: 'Không? (trợ từ)', pronunciation: 'ma' }], tips: 'Không có ký hiệu thanh điệu, đọc lướt qua.' },
            { pinyin: '1 (mā)', vietnameseGuide: 'Thanh ngang: Cao, bằng phẳng', examples: [{ char: '妈', pinyin: 'mā', vietnamese: 'Mẹ', pronunciation: 'ma' }], tips: 'Hát nốt nhạc cao và kéo dài.' },
            { pinyin: '2 (má)', vietnameseGuide: 'Thanh sắc: Từ trung bình lên cao', examples: [{ char: '麻', pinyin: 'má', vietnamese: 'Ma (vỏ gai)', pronunciation: 'má' }], tips: 'Giống như khi bạn đang hỏi "Cái gì?".' },
            { pinyin: '3 (mǎ)', vietnameseGuide: 'Thanh hỏi/huyền: Xuống thấp nhất rồi lên nhẹ', examples: [{ char: '马', pinyin: 'mǎ', vietnamese: 'Ngựa', pronunciation: 'mả' }], tips: 'Thực tế khi đọc nhanh, nó giống thanh nặng kéo dài rồi hơi đi lên.' },
            { pinyin: '4 (mà)', vietnameseGuide: 'Thanh đi xuống: Từ cao nhất rơi mạnh xuống thấp nhất', examples: [{ char: '骂', pinyin: 'mà', vietnamese: 'Mắng', pronunciation: 'mạ!' }], tips: 'Dứt khoát, giống như đang ra lệnh.' }
        ]
    },
    
];

export const getAllGroups = () => {
    return pronunciationGroups;
};

export const getGroupById = (id) => {
    return pronunciationGroups.find(g => g.id === id);
};

export const getGroupsByCategory = (category) => {
    return pronunciationGroups.filter(g => g.category === category);
};

