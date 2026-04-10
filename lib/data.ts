export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

export interface PlaybookSubTopic {
  id: string;
  title: string;
  summary: string;
  content: string;
  charts?: {
    type: 'pie' | 'bar' | 'line' | 'donut' | 'area';
    title: string;
    data: ChartData[];
  }[];
}

export interface PlaybookMainTopic {
  id: string;
  title: string;
  shortTitle?: string;
  icon: string;
  subTopics: PlaybookSubTopic[];
}

export const PLAYBOOK_DATA: PlaybookMainTopic[] = [
  {
    id: 'legal-framework',
    title: 'Khung khổ pháp luật và các điều ước quốc tế',
    shortTitle: 'Khung khổ pháp luật',
    icon: 'Gavel',
    subTopics: [
      {
        id: 'legal-framework-shtt',
        title: 'Khung khổ pháp luật về SHTT',
        summary: 'Hệ thống pháp luật SHTT Việt Nam được xây dựng dựa trên nền tảng Luật SHTT 2005 và các đợt sửa đổi quan trọng (2009, 2019, 2022, 2025). Đây là hành lang pháp lý cốt lõi điều chỉnh các quan hệ về quyền tác giả, quyền liên quan, sở hữu công nghiệp và giống cây trồng. Đặc biệt, Luật sửa đổi năm 2025 đánh dấu bước ngoặt lớn trong việc cải cách thủ tục hành chính, thúc đẩy khai thác thương mại tài sản trí tuệ và bảo hộ các đối tượng mới trong kỷ nguyên số như AI và sản phẩm phi vật lý.',
        content: `Qua thực tiễn 20 năm thi hành, Luật SHTT đã phát huy vai trò to lớn trong việc tạo hành lang pháp lý cho các tổ chức, cá nhân xác lập, khai thác và bảo vệ quyền SHTT, tạo môi trường kinh doanh lành mạnh cho hoạt động sản xuất - kinh doanh, góp phần khuyến khích hoạt động sáng tạo, đẩy mạnh chuyển giao công nghệ, thu hút đầu tư nước ngoài, thúc đẩy sự phát triển kinh tế - xã hội của đất nước.

Luật SHTT được Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam thông qua năm 2005 (Luật số 50/2005/QH11) có hiệu lực thi hành từ ngày 01/7/2006, được sửa đổi, bổ sung năm 2009 (Luật số 36/2009/QH12), năm 2019 (Luật số 42/2019/QH14), năm 2022 (Luật số 07/2022/QH15) và năm 2025 (Luật số 93/2025/QH15, Luật số 131/2025/QH15) (sau đây gọi là “Luật SHTT”) là văn bản pháp luật quan trọng, điều chỉnh các quan hệ xã hội liên quan đến loại tài sản đặc biệt – quyền SHTT.

**Các văn bản hướng dẫn thi hành quan trọng đã được ban hành:**
- **Nghị định số 17/2023/NĐ-CP:** Quy định chi tiết một số điều và biện pháp thi hành Luật SHTT về quyền tác giả, quyền liên quan.
- **Nghị định số 65/2023/NĐ-CP:** Quy định chi tiết về sở hữu công nghiệp (SHCN), bảo vệ quyền SHCN, quyền đối với giống cây trồng và quản lý nhà nước về SHTT.
- **Nghị định số 79/2023/NĐ-CP:** Quy định chi tiết về quyền đối với giống cây trồng.
- **Thông tư số 23/2023/TT-BKHCN:** Hướng dẫn về thủ tục xác lập quyền SHCN và bảo đảm thông tin SHCN.
- **Thông tư số 08/2023/TT-BVHTTDL:** Quy định các mẫu trong hoạt động đăng ký quyền tác giả.
- **Thông tư số 07/2024/TT-BVHTTDL:** Quy định định mức kinh tế - kỹ thuật dịch vụ giám định về quyền tác giả.

**Luật sửa đổi năm 2025 (Luật số 131/2025/QH15):**
Có hiệu lực từ ngày 01/4/2026, tập trung vào các nội dung:
1. **Cải cách thủ tục hành chính:** Rút ngắn thời gian thẩm định đơn sáng chế (từ 18 xuống 12 tháng), nhãn hiệu (từ 9 xuống 5 tháng).
2. **Thúc đẩy khai thác thương mại:** Biến quyền SHTT thành tài sản sinh lời, hỗ trợ góp vốn hoặc thế chấp vay vốn.
3. **Bảo hộ đối tượng mới:** Kiểu dáng công nghiệp riêng phần, sản phẩm phi vật lý (GUI, icon), tín hiệu cáp mã hóa.
4. **Xử lý vấn đề AI:** Quy định về khai thác dữ liệu huấn luyện AI và bảo hộ đối tượng do AI tạo ra.`,
      },
      {
        id: 'asean-treaties',
        title: 'Các hiệp định đa phương trong khuôn khổ ASEAN',
        summary: 'Hợp tác SHTT trong ASEAN là một trụ cột quan trọng nhằm thiết lập khu vực kinh tế cạnh tranh và đổi mới. Thông qua Hiệp định khung ASEAN (1995) và các hiệp định FTA với các đối tác lớn như Ấn Độ, Nhật Bản, Trung Quốc, Hàn Quốc, Úc và New Zealand, các quốc gia thành viên đã xây dựng cơ chế phối hợp chặt chẽ. Đặc biệt, Hiệp định RCEP đại diện cho cam kết cao nhất về SHTT trong khu vực, đặt ra các tiêu chuẩn bảo hộ toàn diện hỗ trợ chuỗi cung ứng và thương mại điện tử xuyên biên giới.',
        content: `Trong phạm vi nội khối, các quốc gia thành viên ASEAN đã ký kết một số điều ước quốc tế, thỏa thuận hợp tác trong lĩnh vực SHTT nhằm tăng cường hoạt động hợp tác, thúc đẩy phổ biến và chuyển giao công nghệ, vì lợi ích chung của Cộng đồng.

**Các hiệp định và thỏa thuận chính:**
1. **Hiệp định khung ASEAN về hợp tác SHTT (1995):** Ký tại Bangkok ngày 15/12/1995, tạo cơ sở pháp lý đầu tiên cho việc hợp tác giữa 7 quốc gia thành viên ban đầu.
2. **Hiệp định FTA ASEAN - Ấn Độ:** SHTT được liệt kê là một trong các lĩnh vực hợp tác kinh tế (Điều 6.1.viii).
3. **Hiệp định AJCEP (ASEAN - Nhật Bản):** Hiệp định thương mại tự do toàn diện, quy định SHTT là nội dung hợp tác tại Điều 53.c.
4. **Hiệp định ACFTA (ASEAN - Trung Quốc):** Thiết lập cơ chế hợp tác bảo vệ quyền SHTT, bao gồm nguồn gen, tri thức truyền thống và văn hóa dân gian.
5. **Hiệp định FTA ASEAN - Hàn Quốc:** Cơ sở pháp lý cho khu vực thương mại tự do, tuy nhiên SHTT chưa được quy định chi tiết.
6. **Hiệp định AANZFTA (ASEAN - Úc - New Zealand):** Chứa đựng các cam kết SHTT tương đối toàn diện và ở mức cao.
7. **Hiệp định RCEP:** Hiệp định toàn diện nhất, với Chương SHTT (Chương 11) đặt ra các yêu cầu tối thiểu và một số cam kết cao hơn chuẩn TRIPS.`,
      },
      {
        id: 'global-ftas',
        title: 'Các Hiệp định FTA thế hệ mới và song phương',
        summary: 'Việt Nam đã chủ động tham gia vào mạng lưới các FTA thế hệ mới với tiêu chuẩn bảo hộ SHTT ở mức cao (TRIPS+). Các hiệp định như CPTPP, EVFTA và UKVFTA không chỉ mở rộng phạm vi bảo hộ đối với chỉ dẫn địa lý, sáng chế và kiểu dáng mà còn thắt chặt các biện pháp thực thi quyền trên môi trường số. Việc thực thi các cam kết này đòi hỏi sự điều chỉnh linh hoạt của pháp luật nội địa, đồng thời tạo ra lợi thế cạnh tranh lớn cho các sản phẩm đặc sản của Việt Nam trên thị trường quốc tế.',
        content: `Việt Nam đã tham gia và thực thi nhiều hiệp định thương mại tự do (FTA) thế hệ mới với các tiêu chuẩn bảo hộ SHTT rất cao (TRIPS+).

**Các hiệp định tiêu biểu:**
- **Hiệp định CPTPP:** Gồm 83 Điều về SHTT, thúc đẩy đổi mới, chuyển giao công nghệ và cân bằng lợi ích. Đặc biệt nhấn mạnh tính minh bạch trên Internet và bảo hộ giống cây trồng.
- **Hiệp định Việt Nam - Hoa Kỳ (BTA):** Xây dựng trên mô hình TRIPS, phản ánh những thay đổi về tiêu chuẩn SHTT toàn cầu.
- **Hiệp định VJEPA (Việt Nam - Nhật Bản):** Cam kết bảo hộ đầy đủ, hiệu quả và không phân biệt đối xử, tăng cường thực thi chống hàng giả, hàng lậu.
- **Hiệp định FTA Việt Nam - Chile:** Tập trung vào bảo hộ chỉ dẫn địa lý cho công dân hai nước.
- **Hiệp định VKFTA (Việt Nam - Hàn Quốc):** Cam kết tương đương TRIPS và pháp luật quốc gia.
- **Hiệp định VN-EAEU FTA (Liên minh kinh tế Á Âu):** Gồm 17 Điều về SHTT, phù hợp với pháp luật hiện hành của Việt Nam.
- **Hiệp định EVFTA (Liên minh châu Âu):** Cam kết sâu rộng về chỉ dẫn địa lý, sáng chế, kiểu dáng và thực thi quyền.
- **Hiệp định UKVFTA (Vương quốc Anh):** Kế thừa EVFTA, tập trung duy trì bảo hộ các chỉ dẫn địa lý quan trọng như Scotch Whiskey, Irish Cream...`,
      }
    ]
  },
  {
    id: 'enforcement',
    title: 'Tình hình xử lý xâm phạm quyền',
    icon: 'ShieldAlert',
    subTopics: [
      {
        id: 'enforcement-trends',
        title: 'Đánh giá chung và Xu hướng vi phạm',
        summary: 'Thực trạng xâm phạm quyền SHTT tại Việt Nam đang có sự dịch chuyển mạnh mẽ từ môi trường truyền thống sang không gian mạng với các thủ đoạn tinh vi và tính ẩn danh cao. Việc lợi dụng thương mại điện tử, mạng xã hội và các nền tảng livestream để kinh doanh hàng giả, hàng nhái đã trở thành thách thức lớn cho các cơ quan chức năng. Các đối tượng vi phạm hiện nay không chỉ dừng lại ở quy mô nhỏ lẻ mà đã hình thành các đường dây xuyên biên giới, ứng dụng công nghệ cao như AI để lừa dối người tiêu dùng.',
        content: `Tình hình xâm phạm quyền SHCN và sản xuất, buôn bán hàng giả mạo nhãn hiệu, chỉ dẫn địa lý tại Việt Nam tiếp tục diễn biến phức tạp, gia tăng về quy mô và mức độ tinh vi.

**Các đặc điểm đáng chú ý:**
1. **Dịch chuyển sang môi trường số:** Vi phạm bùng nổ trên các sàn thương mại điện tử, mạng xã hội và nền tảng xuyên biên giới.
2. **Tính ẩn danh cao:** Đối tượng lợi dụng không gian mạng để quảng bá, tàng trữ và vận chuyển hàng hóa khó truy vết.
3. **Quy mô lớn và xuyên biên giới:** Hàng giả được sản xuất với quy mô công nghiệp, có yếu tố liên tỉnh và quốc tế.
4. **Ứng dụng công nghệ cao:** Sử dụng AI và Deepfake để tạo video quảng cáo giả mạo, lừa dối người tiêu dùng.
5. **Livestream "chớp nhoáng":** Hình thức bán hàng diễn ra nhanh, xóa nội dung ngay sau khi kết thúc để tránh bị cơ quan chức năng thu thập chứng cứ.
6. **Thủ đoạn tinh vi:** Làm giả tem truy xuất nguồn gốc, sử dụng địa chỉ ảo và kho hàng tạm thời thường xuyên thay đổi địa điểm.`,
      },
      {
        id: 'enforcement-results',
        title: 'Kết quả hỗ trợ thực thi quyền SHTT',
        summary: 'Công tác thực thi quyền SHTT đã đạt được những kết quả thực chất thông qua sự phối hợp liên ngành chặt chẽ giữa Cục SHTT và các lực lượng Công an, Quản lý thị trường, Hải quan. Cục SHTT đã phát huy vai trò nòng cốt trong việc cung cấp ý kiến chuyên môn, hỗ trợ giám định và tham mưu hoàn thiện thể chế xử phạt vi phạm hành chính. Các chỉ số về số lượng ý kiến chuyên môn và các vụ việc xử lý thành công qua các năm cho thấy nỗ lực không ngừng trong việc bảo vệ quyền lợi hợp pháp của chủ thể quyền và người tiêu dùng.',
        content: `Cục SHTT đóng vai trò đầu mối trong việc hoàn thiện thể chế và cung cấp ý kiến chuyên môn cho các lực lượng thực thi pháp luật.

**Công tác hoàn thiện thể chế:**
- Xây dựng Nghị định số 46/2024/NĐ-CP sửa đổi quy định xử phạt vi phạm hành chính trong lĩnh vực SHCN.
- Tham mưu xây dựng Chỉ thị số 02/CT-TTg ngày 30/01/2026 của Thủ tướng Chính phủ về tăng cường thực thi quyền SHTT.

**Công tác phối hợp hoạt động:**
- Cung cấp hàng trăm ý kiến chuyên môn mỗi năm cho lực lượng Công an, Quản lý thị trường, Hải quan và Tòa án.
- Tham gia các đoàn thanh tra, kiểm tra liên ngành đối với các mặt hàng trọng điểm như dược phẩm, thực phẩm, vật tư nông nghiệp.`,
        charts: [
          {
            type: 'bar',
            title: 'Số lượng ý kiến chuyên môn theo cơ quan (2021-2025)',
            data: [
              { name: 'Công an', value: 341 },
              { name: 'QLTT', value: 102 },
              { name: 'Tòa án', value: 49 },
              { name: 'Hải quan', value: 15 },
              { name: 'Thanh tra', value: 29 },
              { name: 'Khác', value: 441 },
            ]
          },
          {
            type: 'donut',
            title: 'Cơ cấu ý kiến chuyên môn năm 2025',
            data: [
              { name: 'Công an', value: 52 },
              { name: 'QLTT', value: 30 },
              { name: 'Tòa án', value: 23 },
              { name: 'Hải quan', value: 5 },
              { name: 'Thanh tra', value: 1 },
              { name: 'Khác', value: 86 },
            ]
          },
          {
            type: 'area',
            title: 'Tổng số ý kiến chuyên môn qua các năm',
            data: [
              { name: '2021', value: 284 },
              { name: '2022', value: 240 },
              { name: '2023', value: 142 },
              { name: '2024', value: 124 },
              { name: '2025', value: 197 },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'training',
    title: 'Đào tạo và nâng cao nhận thức',
    shortTitle: 'Nâng cao nhận thức',
    icon: 'GraduationCap',
    subTopics: [
      {
        id: 'training-overview',
        title: 'Tổng quan công tác đào tạo giai đoạn 2021-2025',
        summary: 'Các hoạt động bồi dưỡng kiến thức, kỹ năng và phát triển nguồn nhân lực SHTT.',
        content: `Cục SHTT đã triển khai đồng bộ các giải pháp đào tạo nhằm nâng cao năng lực cho cán bộ quản lý, thực thi và nhận thức của cộng đồng.

**Các kết quả nổi bật:**
- **Đề án đào tạo 2030:** Xây dựng lộ trình phát triển nguồn nhân lực SHTT dài hạn.
- **Quy mô đào tạo:** Chủ trì khoảng 10 lớp tập huấn và phối hợp giảng dạy cho 50 lớp mỗi năm trên toàn quốc.
- **Đào tạo chuyên sâu:** Duy trì các khóa đào tạo 6 tháng cho người hành nghề dịch vụ đại diện SHTT.
- **Mạng lưới TISC:** Triển khai hoạt động tư vấn, tập huấn cho các trường đại học và viện nghiên cứu nhằm thúc đẩy bảo hộ kết quả nghiên cứu.
- **Cổng đào tạo trực tuyến:** Vận hành từ năm 2021, thu hút hàng trăm lượt học viên mỗi năm với các khóa học tổng quan.
- **Hợp tác quốc tế:** Mời chuyên gia WIPO, JPO sang giảng dạy và cử cán bộ tham gia các khóa đào tạo tại nước ngoài.`,
      },
      {
        id: 'events-2025',
        title: 'Các hội thảo và sự kiện tiêu biểu năm 2025',
        summary: 'Danh sách các hoạt động trọng điểm nhằm phổ biến kiến thức SHTT.',
        content: `Năm 2025 chứng kiến nhiều sự kiện quan trọng với sự tham gia của các đối tác quốc tế và cộng đồng doanh nghiệp.

**Danh mục sự kiện tiêu biểu:**
1. **Hội thảo Bản đồ sáng chế (JICA):** 19-21/3/2025.
2. **Chia sẻ kinh nghiệm giảng dạy SHTT trong trường phổ thông:** 25/3/2025.
3. **Tập huấn tra cứu và viết bản mô tả sáng chế:** 28/3/2025.
4. **Chào mừng Ngày SHTT thế giới:** 25/4/2025.
5. **Hội thảo Hệ thống Madrid về nhãn hiệu quốc tế:** 11-12/6/2025.
6. **Thương mại hóa sáng chế (JICA):** 06/08/2025.
7. **Nâng cao quản trị SHTT trong doanh nghiệp (WIPO):** Tháng 10/2025.
8. **Hợp tác chiến lược với Đại học Luật TP.HCM:** 05/3/2026.
9. **Định giá tài sản trí tuệ:** 17-18/3/2026.`,
      }
    ]
  },
  {
    id: 'cooperation',
    title: 'Hoạt động hợp tác quốc tế',
    shortTitle: 'Hợp tác quốc tế',
    icon: 'Users',
    subTopics: [
      {
        id: 'cooperation-overview',
        title: 'Tổng quan và Xu hướng hợp tác kỷ nguyên số',
        summary: 'Khuôn khổ hợp tác đa phương, song phương và sự chuyển dịch sang tài sản vô hình.',
        content: `Việt Nam đang triển khai 25 thỏa thuận hợp tác quốc tế (05 đa phương, 20 song phương), củng cố vị thế trên bản đồ SHTT thế giới.

**Khuôn khổ hợp tác:**
- **Đa phương:** WTO (TRIPS), WIPO, APEC (IPEG), ASEAN (AWGIPC).
- **Song phương:** 15 đối tác trọng điểm tại Châu Âu (EPO, EUIPO, Pháp...), Châu Mỹ (USPTO, Cuba), Châu Á (Nhật Bản, Hàn Quốc, Trung Quốc, Singapore...).

**Xu hướng trong kỷ nguyên số:**
1. **Tài chính hóa SHTT:** Đầu tư vô hình tăng trưởng gấp 3 lần hữu hình, chiếm 14% GDP toàn cầu năm 2024.
2. **Mở rộng đối tượng bảo hộ:** AI, thuật toán, dữ liệu huấn luyện, giao diện phi vật lý.
3. **Hiện đại hóa cơ quan SHTT:** Ứng dụng Cloud, AI và Big Data để tự động hóa quy trình thẩm định.
4. **Giải quyết thách thức toàn cầu:** SHTT hỗ trợ công nghệ xanh, năng lượng tái tạo và y tế cộng đồng (WIPO GREEN, Medicines Patent Pool).`,
      },
      {
        id: 'bilateral-partners',
        title: 'Tình hình hợp tác với các đối tác tiêu biểu',
        summary: 'Chi tiết các dự án và kết quả hợp tác với WIPO, Nhật Bản, Hàn Quốc, EU...',
        content: `Hợp tác song phương đạt nhiều kết quả thực chất, hỗ trợ trực tiếp cho quá trình hiện đại hóa hệ thống SHTT Việt Nam.

**Các đối tác chiến lược:**
- **WIPO:** Ký Bản ghi nhớ tháng 9/2025, hỗ trợ dự án WIPO IPAS, số hóa tư liệu sáng chế và phân tích chỉ số đổi mới sáng tạo (GII, PII).
- **Nhật Bản (JPO/JICA):** Triển khai 05 dự án ODA, hỗ trợ bảo hộ chỉ dẫn địa lý (Thanh long Bình Thuận, Vải thiều Lục Ngạn tại Nhật Bản).
- **Hàn Quốc (KIPO):** Chương trình PPH rút ngắn thời gian thẩm định sáng chế, dự án IP Sharing hỗ trợ cộng đồng (lụa Mã Châu, xử lý nước thải).
- **Châu Âu (EPO/EUIPO):** Đào tạo thẩm định viên, tích hợp dữ liệu vào hệ thống TMview và Designview toàn cầu.
- **Pháp (INPI):** Kỷ niệm 30 năm hợp tác, tập trung vào quản trị cơ quan SHTT và kiểm soát chất lượng.`,
      }
    ]
  },
  {
    id: 'statistics',
    title: 'Số liệu thống kê SHTT',
    shortTitle: 'Số liệu thống kê',
    icon: 'BarChart3',
    subTopics: [
      {
        id: 'general-stats',
        title: 'Tổng quan đơn đăng ký và văn bằng bảo hộ',
        summary: 'Giai đoạn 2021-2025 chứng kiến sự bùng nổ về số lượng đơn đăng ký và văn bằng bảo hộ được cấp, phản ánh sự sôi động của hoạt động đổi mới sáng tạo và nhận thức ngày càng cao về SHTT. Với tổng cộng hơn 423.000 đơn tiếp nhận và hơn 255.000 văn bằng được cấp, hệ thống SHTT Việt Nam đã vận hành với hiệu suất cao, tốc độ tăng trưởng trung bình hàng năm đạt mức ấn tượng. Đây là minh chứng cho sự phục hồi mạnh mẽ của nền kinh tế và nỗ lực cải cách quy trình thẩm định của cơ quan quản lý.',
        content: `Giai đoạn 2021-2025 ghi nhận sự tăng trưởng mạnh mẽ trong tất cả các khâu từ tiếp nhận đến cấp văn bằng.

**Số liệu tổng hợp:**
- **Tiếp nhận:** Tổng cộng 423.365 đơn (tăng 26,5% so với giai đoạn trước).
- **Xử lý:** 436.009 đơn (tăng 69%).
- **Cấp VBBH:** 255.371 văn bằng (tăng 55,4%).

**Tốc độ tăng trưởng trung bình năm:**
- Tiếp nhận: 4,6%
- Xử lý: 15,4%
- Cấp VBBH: 18,6%`,
        charts: [
          {
            type: 'area',
            title: 'Xu hướng tiếp nhận đơn (2021-2025)',
            data: [
              { name: '2021', value: 75556 },
              { name: '2022', value: 78086 },
              { name: '2023', value: 84753 },
              { name: '2024', value: 89037 },
              { name: '2025', value: 95933 },
            ]
          },
          {
            type: 'bar',
            title: 'Số lượng văn bằng bảo hộ đã cấp',
            data: [
              { name: '2021', value: 39056 },
              { name: '2022', value: 42279 },
              { name: '2023', value: 36977 },
              { name: '2024', value: 53674 },
              { name: '2025', value: 83385 },
            ]
          }
        ]
      },
      {
        id: 'patent-stats',
        title: 'Số liệu về Sáng chế và Giải pháp hữu ích',
        summary: 'Phân tích chi tiết đơn đăng ký theo chủ thể, lĩnh vực và xu hướng công nghệ chiến lược.',
        content: `Lĩnh vực sáng chế và GPHU có sự bứt phá mạnh mẽ, đặc biệt là từ các chủ thể trong nước.

**Cơ cấu người nộp đơn Việt Nam (2025):**
- Doanh nghiệp: 574 đơn.
- Trường đại học: 496 đơn.
- Cá nhân: 405 đơn.
- Viện nghiên cứu: 149 đơn.

**10 lĩnh vực IPC hàng đầu (2025):**
1. H04 (Kỹ thuật thông tin điện): 2.130 đơn.
2. A61 (Y tế, vệ sinh): 916 đơn.
3. G06 (Tính toán, đếm): 693 đơn.
4. C07 (Hóa hữu cơ): 559 đơn.

**Công nghệ chiến lược tăng trưởng mạnh (2025-2026):**
- Trí tuệ nhân tạo (AI): Tăng 20% đơn, 33% bằng cấp.
- Blockchain: Tăng 35% đơn, 70% bằng cấp.
- An ninh mạng: Tăng 52% đơn, 48% bằng cấp.
- Hàng không vũ trụ: Tăng 57% đơn, 56% bằng cấp.`,
        charts: [
          {
            type: 'bar',
            title: 'Đơn sáng chế VN theo chủ thể (2025)',
            data: [
              { name: 'Doanh nghiệp', value: 574 },
              { name: 'Trường ĐH', value: 496 },
              { name: 'Cá nhân', value: 405 },
              { name: 'Viện NC', value: 149 },
              { name: 'Khác', value: 47 },
            ]
          },
          {
            type: 'donut',
            title: 'Tỷ lệ đơn sáng chế theo lĩnh vực IPC (2025)',
            data: [
              { name: 'Thông tin điện', value: 2130 },
              { name: 'Y tế/Vệ sinh', value: 916 },
              { name: 'Tính toán', value: 693 },
              { name: 'Hóa hữu cơ', value: 559 },
              { name: 'Lĩnh vực khác', value: 1500 },
            ]
          },
          {
            type: 'bar',
            title: 'Tăng trưởng đơn công nghệ chiến lược (%)',
            data: [
              { name: 'AI', value: 20 },
              { name: 'Cloud/BigData', value: 17 },
              { name: 'Blockchain', value: 35 },
              { name: 'Robot/TĐH', value: 33 },
              { name: 'An ninh mạng', value: 52 },
              { name: 'Vũ trụ', value: 57 },
            ]
          }
        ]
      },
      {
        id: 'trademark-design-stats',
        title: 'Số liệu về Nhãn hiệu và Kiểu dáng công nghiệp',
        summary: 'Thống kê đơn đăng ký quốc gia, quốc tế và phân loại theo ngành hàng.',
        content: `Nhãn hiệu và Kiểu dáng công nghiệp duy trì vị thế là nhóm có số lượng xác lập quyền lớn nhất.

**Nhãn hiệu (2025):**
- Tiếp nhận: 68.020 đơn (52.619 đơn VN, 15.406 đơn nước ngoài).
- Cấp giấy chứng nhận: 66.660 (53.367 cho VN, 13.293 cho nước ngoài).

**Kiểu dáng công nghiệp (2025):**
- Tiếp nhận: 3.588 đơn.
- Cấp bằng độc quyền: 3.500 bằng.

**Cơ cấu ngành hàng Kiểu dáng (2025):**
- Bao bì: 31,7%
- Xây dựng: 15,2%
- Nội thất: 10,7%
- Dệt may/Phụ kiện: 8,3%
- Giao thông: 7,0%`,
        charts: [
          {
            type: 'donut',
            title: 'Cơ cấu ngành hàng Kiểu dáng công nghiệp (2025)',
            data: [
              { name: 'Bao bì', value: 31.7 },
              { name: 'Xây dựng', value: 15.2 },
              { name: 'Nội thất', value: 10.7 },
              { name: 'Dệt may', value: 8.3 },
              { name: 'Giao thông', value: 7.0 },
              { name: 'Khác', value: 27.1 },
            ]
          },
          {
            type: 'bar',
            title: 'Đơn nhãn hiệu quốc gia (2021-2025)',
            data: [
              { name: '2021', value: 52926 },
              { name: '2022', value: 56050 },
              { name: '2023', value: 60929 },
              { name: '2024', value: 64112 },
              { name: '2025', value: 68020 },
            ]
          }
        ]
      }
    ]
  }
];
