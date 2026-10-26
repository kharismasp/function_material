// Original bilingual exposition adapted to the two user-supplied teaching PDFs.
// Each page has a stable key and a verified page-level source reference.
const deepContent={};
const DB=(id,en)=>({id,en});
function DP(key,id,en,formula,pi,pe,si,se,source,visual,check){return {key,title:DB(id,en),formula,paragraphs:DB(pi,pe),steps:DB(si,se),source,visual,check};}
const F2='Functions & Graphs 2',F3='Functions & Graphs 3';
deepContent['exponential/0']=[
DP('indices','Indeks: arti sebelum aturan','Indices: meaning before rules','a⁰ = 1   ·   a⁻ⁿ = 1/aⁿ   ·   a^(m/n) = (ⁿ√a)ᵐ',
['Gunakan a>0 agar seluruh pangkat real terdefinisi. Pangkat negatif menyatakan kebalikan; tanda output tidak otomatis menjadi negatif.','Aturan pangkat dapat dijelaskan lewat perkalian berulang, lalu diperluas secara konsisten ke nol, negatif, dan pecahan.'],
['Use a>0 so every real exponent is defined. A negative exponent denotes a reciprocal; it does not automatically make the output negative.','Index laws follow from repeated multiplication and extend consistently to zero, negative and fractional powers.'],
['16^(3/4) = (⁴√16)³ = 2³ = 8.','2³ × 2⁻⁵ = 2^(3−5) = 2⁻² = 1/4.','2³ + 2⁴ = 24, bukan 2⁷ = 128.'],
['16^(3/4) = (⁴√16)³ = 2³ = 8.','2³ × 2⁻⁵ = 2^(3−5) = 2⁻² = 1/4.','2³ + 2⁴ = 24, not 2⁷ = 128.'],F3+' · p.1',null,DB('Mengapa 3⁻² positif?','Why is 3⁻² positive?')),
DP('multiplicative','Tambah tetap atau kali tetap?','Constant difference or constant ratio?','f(x+1) = b f(x)',
['Pola linear menambah jumlah yang sama. Pola eksponen mengalikan faktor yang sama untuk setiap kenaikan input satu satuan.','Pada f(x)=Abˣ, A=f(0) dan b=f(x+1)/f(x). Untuk model positif: b>1 tumbuh, 0<b<1 meluruh.'],
['A linear pattern adds the same amount. An exponential pattern multiplies by the same factor for each unit increase in input.','For f(x)=Abˣ, A=f(0) and b=f(x+1)/f(x). For positive models: b>1 gives growth, 0<b<1 gives decay.'],
['Linear: 10, 14, 18, 22 → selisih +4.','Eksponen: 10, 15, 22.5, 33.75 → rasio ×1.5.','Kenaikan 6% memberi b=1.06; penurunan 6% memberi b=0.94.'],
['Linear: 10, 14, 18, 22 → difference +4.','Exponential: 10, 15, 22.5, 33.75 → ratio ×1.5.','A 6% increase gives b=1.06; a 6% decrease gives b=0.94.'],F3+' · p.1','ratio',DB('Jika output menjadi 80% setiap jam, berapa b?','If 80% remains each hour, what is b?'))
];
deepContent['exponential/1']=[
DP('base-graph','Basis menentukan arah grafik','The base controls graph direction','y = bˣ,   b > 0,   b ≠ 1',
['Domain ℝ, range (0,∞), intersep (0,1), asimtot horizontal y=0. Grafik tidak pernah mencapai nol untuk input real berhingga.','b>1: naik. 0<b<1: turun. Arah ini berlaku untuk model dasar dengan koefisien positif.'],
['Domain ℝ, range (0,∞), intercept (0,1), horizontal asymptote y=0. The graph never reaches zero at a finite real input.','b>1: increasing. 0<b<1: decreasing. These directions apply to the basic model with positive coefficient.'],
['2ˣ melalui (−1,1/2), (0,1), (1,2).','(1/2)ˣ melalui (−1,2), (0,1), (1,1/2).','Mengganti x dengan −x merefleksikan grafik terhadap sumbu-y.'],
['2ˣ passes through (−1,1/2), (0,1), (1,2).','(1/2)ˣ passes through (−1,2), (0,1), (1,1/2).','Replacing x with −x reflects the graph in the y-axis.'],F3+' · pp.1–2','growth'),
DP('exp-transform','Transformasi eksponen','Transforming exponentials','y = A b^(x−h) + k,   A ≠ 0',
['Asimtot menjadi y=k. Jika A>0, range (k,∞); jika A<0, range (−∞,k). Domain tetap ℝ.','Titik acuan (0,1) pada bˣ berpindah menjadi (h,A+k). Intersep-y adalah Ab^(−h)+k, bukan selalu A.'],
['The asymptote becomes y=k. If A>0, the range is (k,∞); if A<0, it is (−∞,k). The domain remains ℝ.','The reference point (0,1) on bˣ becomes (h,A+k). The y-intercept is Ab^(−h)+k, which is not always A.'],
['f(x)=3·2^(x−1)−4: geser kanan 1, regang vertikal 3, turun 4.','Asimtot y=−4; f(1)=−1; f(0)=−5/2.','Untuk 3−2ˣ, refleksi vertikal memberi range (−∞,3).'],
['f(x)=3·2^(x−1)−4: shift right 1, stretch vertically by 3, shift down 4.','Asymptote y=−4; f(1)=−1; f(0)=−5/2.','For 3−2ˣ, a vertical reflection gives range (−∞,3).'],F3+' · p.2','exp-transform',DB('Mengapa y=−4 tidak termasuk range?','Why is y=−4 excluded from the range?')),
DP('exp-reconstruct','Bangun kembali model dari titik','Reconstruct a model from points','f(x) = A bˣ + k',
['Jika asimtot k diketahui, kurangi k dari setiap output sebelum mencari rasio. Rasio output asli umumnya bukan b.','Syarat b>0 harus dipertahankan. Untuk dua titik dengan jarak input 2, pilih akar positif saat memperoleh b².'],
['If the asymptote k is known, subtract k from each output before finding a ratio. Ratios of the original outputs generally do not equal b.','Keep b>0. For two points two input units apart, take the positive root when finding b from b².'],
['Asimtot y=2, f(0)=6, f(1)=10.','A+2=6 → A=4. Lalu 4b+2=10 → b=2.','Jadi f(x)=4·2ˣ+2. Uji kedua titik dan asimtot.'],
['Asymptote y=2, f(0)=6, f(1)=10.','A+2=6 → A=4. Then 4b+2=10 → b=2.','Therefore f(x)=4·2ˣ+2. Check both points and the asymptote.'],F3+' · pp.4–5')
];
deepContent['exponential/2']=[
DP('common-base','Persamaan: samakan basis dahulu','Equations: try a common base first','bᵘ = bᵛ ⇔ u = v   (b>0, b≠1)',
['Eksponen satu-ke-satu. Jika basis sah sama, output sama mengharuskan pangkat sama.','Pilih metode dari struktur: basis sama → samakan pangkat; eksponen terisolasi → log; dua pangkat berkaitan → substitusi.'],
['An exponential is one-to-one. With the same valid base, equal outputs require equal exponents.','Choose by structure: common base → equate exponents; isolated exponential → logs; related powers → substitution.'],
['9ˣ=3^(x+4). Karena 9=3², tulis 3^(2x)=3^(x+4).','2x=x+4 → x=4.','Cek: 9⁴=3⁸ dan 3^(4+4)=3⁸.'],
['9ˣ=3^(x+4). Since 9=3², write 3^(2x)=3^(x+4).','2x=x+4 → x=4.','Check: 9⁴=3⁸ and 3^(4+4)=3⁸.'],F3+' · p.2'),
DP('isolate-logs','Isolasi, lalu ambil log','Isolate, then take logarithms','bˣ = c ⇒ x = ln c / ln b   (c>0)',
['Log digunakan setelah suku eksponen berdiri sendiri. Simpan jawaban tepat sebelum pembulatan.','Jika target c≤0, persamaan bˣ=c tidak punya solusi real. Log bilangan nonpositif tidak diperbolehkan.'],
['Use logarithms after isolating the exponential term. Retain an exact answer before rounding.','If c≤0, bˣ=c has no real solution. The logarithm of a nonpositive number is not allowed.'],
['3·2ˣ−4=17 → 3·2ˣ=21 → 2ˣ=7.','x ln2=ln7 → x=ln7/ln2 ≈ 2.807.','Jangan mengubah ln(3·2ˣ−4) menjadi ln3+x ln2−ln4.'],
['3·2ˣ−4=17 → 3·2ˣ=21 → 2ˣ=7.','x ln2=ln7 → x=ln7/ln2 ≈ 2.807.','Do not turn ln(3·2ˣ−4) into ln3+x ln2−ln4.'],F3+' · p.3'),
DP('exp-substitution','Kuadrat tersembunyi: u harus positif','A hidden quadratic: u must be positive','u = 2ˣ > 0,   4ˣ = u²',
['Substitusi menyederhanakan struktur tetapi tidak menghapus syarat u>0. Akar kuadrat dalam u belum menjadi jawaban x.','Setelah menyaring u, kembalikan ke eksponen semula dan uji.'],
['Substitution simplifies the structure but does not remove u>0. Quadratic roots in u are not yet answers in x.','After filtering u, return to the original exponential and check.'],
['4ˣ−3·2ˣ−4=0 → u²−3u−4=0.','(u−4)(u+1)=0 → u=4 atau −1.','Buang u=−1 karena 2ˣ>0. Dari 2ˣ=4, x=2.'],
['4ˣ−3·2ˣ−4=0 → u²−3u−4=0.','(u−4)(u+1)=0 → u=4 or −1.','Reject u=−1 since 2ˣ>0. From 2ˣ=4, x=2.'],F3+' · p.3'),
DP('exp-inequality','Pertidaksamaan dan basis peluruhan','Inequalities and a decay base','0<b<1 ⇒ ln b<0',
['Untuk b>1, bˣ naik sehingga perbandingan pangkat mempertahankan arah. Untuk 0<b<1, fungsi turun sehingga arah berbalik.','Dengan log, pembalikan berasal dari pembagian oleh ln b yang negatif. Bukan aturan tanda yang perlu dihafal tanpa alasan.'],
['For b>1, bˣ increases, so exponent comparisons keep their direction. For 0<b<1, the function decreases, so the direction reverses.','Using logs, reversal comes from dividing by the negative number ln b. It is a consequence of ordinary inequality algebra.'],
['(1/2)ˣ>8 → 2^(−x)>2³ → −x>3 → x<−3.','(0.8)ˣ≤0.5 → x ln0.8≤ln0.5.','Bagi oleh ln0.8<0: x≥ln0.5/ln0.8 ≈ 3.106.'],
['(1/2)ˣ>8 → 2^(−x)>2³ → −x>3 → x<−3.','(0.8)ˣ≤0.5 → x ln0.8≤ln0.5.','Divide by ln0.8<0: x≥ln0.5/ln0.8 ≈ 3.106.'],F3+' · p.4','decay',DB('Uji x=4 pada (0.8)ˣ≤0.5.','Test x=4 in (0.8)ˣ≤0.5.'))
];
deepContent['logarithm/0']=[
DP('log-meaning','Logaritma menjawab “pangkat berapa?”','A logarithm asks “what exponent?”','aʸ = x ⇔ logₐx = y',
['Basis a>0 dan a≠1; argumen x>0. Nilai log y boleh positif, nol, atau negatif.','Angka kecil di bawah “log” adalah basis; angka di dalam argumen adalah output eksponen; hasil log adalah pangkat.'],
['The base satisfies a>0 and a≠1; the argument satisfies x>0. The log value y may be positive, zero or negative.','The subscript is the base; the argument is the exponential output; the logarithm returns the exponent.'],
['2⁵=32 ⇔ log₂32=5.','2⁻²=1/4 ⇔ log₂(1/4)=−2.','a⁰=1 → logₐ1=0; a¹=a → logₐa=1.'],
['2⁵=32 ⇔ log₂32=5.','2⁻²=1/4 ⇔ log₂(1/4)=−2.','a⁰=1 → logₐ1=0; a¹=a → logₐa=1.'],F3+' · p.2',null,DB('Apakah log₂(−2) atau log₂(1/2) yang terdefinisi real?','Which is real-defined: log₂(−2) or log₂(1/2)?')),
DP('inverse-graphs','Eksponen dan log: pasangan invers','Exponential and log: an inverse pair','(p,q) ↔ (q,p)   ·   refleksi / reflection: y=x',
['Domain dan range saling bertukar. y=eˣ: domain ℝ, range (0,∞). y=ln x: domain (0,∞), range ℝ.','Asimtot y=0 pada eksponen direfleksikan menjadi x=0 pada log. Satuan sumbu harus sama agar refleksi tampak benar.'],
['Domain and range swap. y=eˣ: domain ℝ, range (0,∞). y=ln x: domain (0,∞), range ℝ.','The exponential asymptote y=0 reflects to the log asymptote x=0. Equal axis scales are needed for a faithful reflection.'],
['e⁰=1 → titik (0,1) dipasangkan dengan (1,0).','e¹=e → (1,e) dipasangkan dengan (e,1).','Jika 0<a<1, baik aˣ maupun logₐx merupakan fungsi turun.'],
['e⁰=1 → the point (0,1) pairs with (1,0).','e¹=e → (1,e) pairs with (e,1).','If 0<a<1, both aˣ and logₐx are decreasing.'],F3+' · p.3','inverse'),
DP('natural-log','e dan ln: identitas dengan syarat','e and ln: identities with conditions','ln(eˣ) = x (x∈ℝ)   ·   e^(ln x) = x (x>0)',
['e≈2.71828 dan ln berarti log basis e. eˣ berarti e dipangkatkan x, bukan e dikali x.','Identitas invers hanya boleh dipakai saat ekspresi bagian dalam terdefinisi. ln x tidak berarti 1/x.'],
['e≈2.71828 and ln means a logarithm to base e. eˣ means e raised to x, not e multiplied by x.','Inverse identities apply only where the inner expression is defined. ln x does not mean 1/x.'],
['ln(e⁻³)=−3.','e^(ln5)=5.','e^(ln(x−2))=x−2 hanya untuk x>2.'],
['ln(e⁻³)=−3.','e^(ln5)=5.','e^(ln(x−2))=x−2 only for x>2.'],F3+' · p.3'),
DP('log-domain-transform','Domain dan transformasi log','Log domains and transformations','y = k ln(ax+b)+c:   ax+b>0',
['Untuk a≠0 dan k≠0, batas ax+b=0 adalah asimtot vertikal. Tentukan sisi domain dengan pertidaksamaan, bukan menebak arah geser.','Jika a<0, pembagian membalik arah pertidaksamaan domain. Translasi vertikal tidak mengubah domain.'],
['For a≠0 and k≠0, the boundary ax+b=0 is a vertical asymptote. Solve the inequality to find the domain side.','If a<0, division reverses the domain inequality. A vertical translation does not change the domain.'],
['f(x)=2ln(x−3)+1 → x−3>0 → x>3.','Asimtot x=3; range ℝ; f(4)=1 karena ln1=0.','g(x)=ln(5−2x): 5−2x>0 → x<5/2.'],
['f(x)=2ln(x−3)+1 → x−3>0 → x>3.','Asymptote x=3; range ℝ; f(4)=1 because ln1=0.','g(x)=ln(5−2x): 5−2x>0 → x<5/2.'],F3+' · p.3','log-transform')
];
deepContent['logarithm/1']=[
DP('log-laws-proof','Hukum log berasal dari hukum indeks','Log laws follow from index laws','logₐ(uv)=logₐu+logₐv   (u,v>0)',
['Misalkan p=logₐu dan q=logₐv. Maka u=aᵖ, v=aᑫ, sehingga uv=a^(p+q). Log hasil kali adalah p+q.','Dengan alasan serupa, logₐ(u/v)=logₐu−logₐv dan logₐ(uʳ)=r logₐu untuk u>0.'],
['Let p=logₐu and q=logₐv. Then u=aᵖ and v=aᑫ, so uv=a^(p+q). Its logarithm is p+q.','Similarly, logₐ(u/v)=logₐu−logₐv and logₐ(uʳ)=r logₐu for u>0.'],
['log₂12−log₂3=log₂(12/3)=log₂4=2.','log₃9+log₃3=log₃27=3.','ln2+ln3=ln6, sedangkan ln(2+3)=ln5. Tidak ada hukum untuk memisahkan jumlah.'],
['log₂12−log₂3=log₂(12/3)=log₂4=2.','log₃9+log₃3=log₃27=3.','ln2+ln3=ln6, whereas ln(2+3)=ln5. There is no sum-splitting law.'],F3+' · p.2'),
DP('change-base-proof','Ganti basis: turunkan, lalu gunakan','Change of base: derive, then use','logₐx = log_b x / log_b a = ln x / ln a',
['Syarat: a,b>0; a,b≠1; x>0. Pembilang dan penyebut memakai basis yang sama.','Menurunkan rumus membantu mengingat urutan: argumen di atas, basis lama di bawah.'],
['Conditions: a,b>0; a,b≠1; x>0. Numerator and denominator must use the same base.','The derivation explains the order: argument on top, old base below.'],
['Misalkan p=logₐx → aᵖ=x.','Ambil log basis b: p log_b a=log_b x. Bagi oleh log_b a≠0.','log₄x=log₂x/log₂4=(1/2)log₂x; log₂7=ln7/ln2≈2.807.'],
['Let p=logₐx → aᵖ=x.','Take base-b logs: p log_b a=log_b x. Divide by log_b a≠0.','log₄x=log₂x/log₂4=(1/2)log₂x; log₂7=ln7/ln2≈2.807.'],F3+' · p.2'),
DP('domain-preservation','Identitas harus menjaga domain','Identities must preserve the domain','ln(x²) = 2ln|x|   (x≠0)',
['ln(x²) terdefinisi juga saat x negatif. Bentuk 2ln x hanya terdefinisi saat x>0 sehingga bukan identitas pada seluruh domain awal.','Demikian pula, ln(uv) mungkin terdefinisi saat u,v keduanya negatif, sementara ln u+ln v tidak. Pemisahan memerlukan u,v>0.'],
['ln(x²) is also defined for negative x. The expression 2ln x is defined only for x>0, so it is not an identity on the whole original domain.','Likewise, ln(uv) may exist when u,v are both negative, while ln u+ln v does not. Splitting requires u,v>0.'],
['x=−3: ln(x²)=ln9 terdefinisi; 2ln(−3) tidak real.','Gunakan x²=|x|² dengan |x|>0 → ln(x²)=2ln|x|.','Menggabungkan log pada persamaan tidak boleh memperluas domain asal.'],
['x=−3: ln(x²)=ln9 exists; 2ln(−3) is not real.','Use x²=|x|² with |x|>0 → ln(x²)=2ln|x|.','Combining logs in an equation must not enlarge the original domain.'],F3+' · pp.2–3',null,DB('Apakah ln((x−1)(x+1)) dan ln(x−1)+ln(x+1) memiliki domain sama?','Do ln((x−1)(x+1)) and ln(x−1)+ln(x+1) have the same domain?'))
];
deepContent['logarithm/2']=[
DP('log-equations','Persamaan log: syarat dahulu','Log equations: restrictions first','syarat / restrictions → gabung / combine → solve → check',
['Setiap argumen log awal harus positif secara bersamaan. Catat irisannya sebelum menggabungkan.','Hasil aljabar dapat menghasilkan calon yang tidak sah. Uji kembali pada log semula, bukan hanya persamaan hasil perkalian.'],
['Every original log argument must be positive simultaneously. Record the intersection before combining.','Algebra may produce inadmissible candidates. Check the original logs, not just the multiplied equation.'],
['log₁₀x+log₁₀(x−9)=1. Syarat x>0 dan x>9 → x>9.','log₁₀[x(x−9)]=1 → x²−9x=10 → (x−10)(x+1)=0.','Calon 10 dan −1; hanya x=10 sah. Cek log₁₀10+log₁₀1=1.'],
['log₁₀x+log₁₀(x−9)=1. Require x>0 and x>9 → x>9.','log₁₀[x(x−9)]=1 → x²−9x=10 → (x−10)(x+1)=0.','Candidates: 10 and −1; only x=10 is valid. Check log₁₀10+log₁₀1=1.'],F3+' · pp.3–4'),
DP('log-inequality','Pertidaksamaan log: domain dan arah','Log inequalities: domain and direction','a>1: naik / increasing   ·   0<a<1: turun / decreasing',
['Ubah perbandingan log menjadi perbandingan argumen dengan memperhatikan monotonisitas, lalu iriskan dengan domain.','Contoh basis di bawah 1: log_(1/2)(x−1)≥−2. Fungsi turun sehingga argumen harus ≤(1/2)⁻².'],
['Convert a log comparison into an argument comparison using monotonicity, then intersect with the domain.','For a base below 1: log_(1/2)(x−1)≥−2. The function decreases, so the argument must be ≤(1/2)⁻².'],
['Domain: x−1>0 → x>1.','Karena basis 1/2 menurun: x−1≤4 → x≤5.','Gabungkan: 1<x≤5. Batas 1 terbuka, batas 5 tertutup.'],
['Domain: x−1>0 → x>1.','Since base 1/2 gives a decreasing function: x−1≤4 → x≤5.','Combine: 1<x≤5. The endpoint 1 is open; 5 is closed.'],F3+' · pp.3–4 · extension'),
DP('transformed-inverse','Invers eksponen yang ditransformasi','Inverse of a transformed exponential','f(x)=3e^(2x)+1   ⇒   f⁻¹(x)=½ln((x−1)/3)',
['Isolasi eksponen, terapkan ln, lalu tukar input–output. Domain invers sama dengan range fungsi awal.','f memiliki domain ℝ dan range (1,∞). Maka f⁻¹ berdomain x>1 dan memiliki range ℝ.'],
['Isolate the exponential, apply ln, then swap input and output. The inverse domain equals the original range.','f has domain ℝ and range (1,∞). Thus f⁻¹ has domain x>1 and range ℝ.'],
['y=3e^(2x)+1 → (y−1)/3=e^(2x).','ln((y−1)/3)=2x → x=½ln((y−1)/3).','Tukar x,y. Cek f(0)=4 dan f⁻¹(4)=0.'],
['y=3e^(2x)+1 → (y−1)/3=e^(2x).','ln((y−1)/3)=2x → x=½ln((y−1)/3).','Swap x,y. Check f(0)=4 and f⁻¹(4)=0.'],F3+' · p.5'),
DP('log-parameter','Parameter dan jumlah solusi','Parameters and solution counts','ln(x−1) = c   ⇔   x = 1+eᶜ',
['ln(x−1) naik dan mengambil semua nilai real pada x>1. Setiap garis horizontal y=c memotongnya tepat satu kali.','Berbeda dengan eksponen bergeser: eˣ+2=k memiliki satu solusi jika k>2, dan nol solusi jika k≤2.'],
['ln(x−1) increases and takes every real value on x>1. Every horizontal line y=c intersects it exactly once.','In contrast, eˣ+2=k has one solution if k>2 and no solution if k≤2.'],
['Untuk eˣ+2=k, isolasi eˣ=k−2.','Positivitas menuntut k−2>0. Jika k>2, x=ln(k−2).','k=2 bukan solusi limit; eˣ tidak pernah nol pada input real berhingga.'],
['For eˣ+2=k, isolate eˣ=k−2.','Positivity requires k−2>0. If k>2, x=ln(k−2).','k=2 is not a limiting solution; eˣ never equals zero at a finite real input.'],F3+' · pp.1,3,5 · synthesis')
];
deepContent['modelling/0']=[
DP('reverse-model','Pemodelan balik: cari faktor','Reverse modelling: find the factor','P(t) = P₀ bᵗ',
['Identifikasi nilai awal, panjang periode, dan perubahan relatif. Jangan langsung mengambil persen dari selisih total untuk beberapa periode.','Dua observasi memberikan b^(t₂−t₁)=P(t₂)/P(t₁), dengan b>0.'],
['Identify the initial amount, period length and relative change. Do not treat a multi-period total change as a per-period percentage.','Two observations give b^(t₂−t₁)=P(t₂)/P(t₁), with b>0.'],
['P(t)=200bᵗ dan P(2)=288 → b²=288/200=1.44.','b=1.2 sehingga pertumbuhan per periode 20%.','P(t)=200(1.2)ᵗ. Cek t=0 dan t=2.'],
['P(t)=200bᵗ and P(2)=288 → b²=288/200=1.44.','b=1.2, so growth per period is 20%.','P(t)=200(1.2)ᵗ. Check t=0 and t=2.'],F3+' · p.4'),
DP('target-period','Waktu real dan periode pertama','Real time and the first whole period','n ≥ ln(M/P₀) / ln b   (b>1, M>0)',
['Untuk model diskret, n adalah bilangan bulat tak negatif. Kurva eksponen kontinu dapat membantu, tetapi input pecahan bukan sebuah periode diskret.','Setelah memperoleh batas real, pilih bilangan bulat yang memenuhi makna “pertama mencapai”.'],
['In a discrete model, n is a nonnegative integer. A continuous exponential curve can help, but a fractional input is not a discrete period.','After finding the real threshold, choose the integer that satisfies “first reaches”.'],
['100(1.2)ⁿ≥150 → n≥ln1.5/ln1.2≈2.224.','Periode pertama n=3.','Cek: N₂=144<150; N₃=172.8≥150.'],
['100(1.2)ⁿ≥150 → n≥ln1.5/ln1.2≈2.224.','The first period is n=3.','Check: N₂=144<150; N₃=172.8≥150.'],F3+' · p.4 · discrete extension')
];
deepContent['modelling/1']=[
DP('continuous','Model eᵏᵗ dan waktu target','The eᵏᵗ model and target times','P(t)=P₀e^(kt)   ·   t=ln(M/P₀)/k',
['Untuk P₀>0 dan t≥0: k>0 tumbuh, k<0 meluruh. k memiliki satuan kebalikan waktu. Rumus invers mengasumsikan k≠0 dan M>0.','Faktor satu periode adalah eᵏ. Karena itu k=0.05 bukan tepat 5% pertumbuhan per periode. Periksa t≥0 setelah menyelesaikan.'],
['For P₀>0 and t≥0: k>0 gives growth, k<0 gives decay. k has reciprocal-time units. The inverse formula assumes k≠0 and M>0.','The one-period factor is eᵏ. Thus k=0.05 is not exactly 5% growth per period. Check t≥0 after solving.'],
['P(0)=80 dan P(3)=40 → e^(3k)=1/2 → k=−ln2/3 per jam.','Untuk target 20: t=ln(20/80)/(−ln2/3)=6 jam.','Target di atas 80 tidak dicapai di masa depan oleh model peluruhan ini.'],
['P(0)=80 and P(3)=40 → e^(3k)=1/2 → k=−ln2/3 per hour.','For target 20: t=ln(20/80)/(−ln2/3)=6 hours.','A target above 80 is not reached in the future by this decay model.'],F3+' · p.4'),
DP('half-double','Waktu penggandaan dan waktu paruh','Doubling time and half-life','T = ln2/k (k>0)   ·   H = ln(1/2)/k (k<0)',
['Nilai awal hilang saat membagi P(t) dengan P₀. Waktu untuk mengalikan dengan faktor tetap hanya bergantung pada k.','Waktu paruh positif karena ln(1/2) dan k sama-sama negatif.'],
['The initial amount cancels when dividing P(t) by P₀. The time needed for a fixed multiplicative change depends only on k.','Half-life is positive because both ln(1/2) and k are negative.'],
['P₀e^(kT)=2P₀ → e^(kT)=2 → T=ln2/k.','P₀e^(kH)=P₀/2 → H=ln(1/2)/k.','Jika H=3 jam, k=−ln2/3. Dua waktu paruh menyisakan 1/4 nilai awal.'],
['P₀e^(kT)=2P₀ → e^(kT)=2 → T=ln2/k.','P₀e^(kH)=P₀/2 → H=ln(1/2)/k.','If H=3 hours, k=−ln2/3. Two half-lives leave 1/4 of the initial amount.'],F3+' · p.4'),
DP('compare-models','Kapan dua model bertemu?','When do two models meet?','P aᵗ = Q bᵗ ⇒ t = ln(Q/P) / ln(a/b)',
['Rumus berlaku untuk P,Q,a,b>0 dan a≠b. Solusi aljabar harus memenuhi domain waktu model.','Jika a=b: P=Q memberi model identik; P≠Q berarti tidak pernah bertemu.'],
['The formula applies for P,Q,a,b>0 and a≠b. An algebraic solution must satisfy the model time domain.','If a=b: P=Q gives identical models; P≠Q means they never meet.'],
['A(t)=100·2ᵗ dan B(t)=200·(1.5)ᵗ.','(4/3)ᵗ=2 → t=ln2/ln(4/3)≈2.409.','Jika hanya diamati pada periode bulat, ini adalah waktu perpotongan kurva, bukan kesamaan pada sebuah periode bulat.'],
['A(t)=100·2ᵗ and B(t)=200·(1.5)ᵗ.','(4/3)ᵗ=2 → t=ln2/ln(4/3)≈2.409.','If observations occur only at integer periods, this is a curve-intersection time, not equality at an integer period.'],F3+' · p.4'),
DP('linearisation','Linearisasi: baca gradien dan intersep','Linearisation: read slope and intercept','y=kaˣ ⇒ ln y = ln k + x ln a   (k>0,a>0)',
['Pada grafik ln y terhadap x, gradien m=ln a dan intersep c=ln k. Maka a=eᵐ dan k=eᶜ.','Bandingkan dengan model pangkat y=kxⁿ untuk x>0: ln y=ln k+n ln x. Sumbu horizontal yang berbeda menghasilkan makna gradien berbeda.'],
['On a plot of ln y against x, slope m=ln a and intercept c=ln k. Hence a=eᵐ and k=eᶜ.','Compare a power model y=kxⁿ for x>0: ln y=ln k+n ln x. A different horizontal variable changes the meaning of the slope.'],
['Gradien ln2 dan intersep ln5 pada plot ln y terhadap x.','a=e^(ln2)=2; k=e^(ln5)=5 → y=5·2ˣ.','Untuk plot ln y terhadap ln x, gradien 2 dan intersep ln5 justru memberi y=5x².'],
['Slope ln2 and intercept ln5 on a plot of ln y against x.','a=e^(ln2)=2; k=e^(ln5)=5 → y=5·2ˣ.','On a plot of ln y against ln x, slope 2 and intercept ln5 instead give y=5x².'],F3+' · p.5','linearisation')
];
deepContent['polynomial/0']=[
DP('ends','Suku utama dan perilaku ujung','Leading term and end behaviour','P(x) ≈ aₙxⁿ   ketika / when |x| besar / large',
['Derajat genap: kedua ujung searah; derajat ganjil: ujung berlawanan. Tanda koefisien utama menentukan arah ujung kanan.','Derajat memberi batas maksimum akar atau titik balik, bukan jaminan jumlah maksimum itu tercapai.'],
['Even degree: ends point the same way; odd degree: ends point opposite ways. The leading coefficient sign determines the right-hand end.','Degree gives a maximum for roots or turning points, not a guarantee that the maximum is attained.'],
['Koefisien positif, derajat genap → kiri naik, kanan naik.','Koefisien positif, derajat ganjil → kiri turun, kanan naik.','Koefisien negatif membalik kedua arah tersebut.'],
['Positive coefficient, even degree → left up, right up.','Positive coefficient, odd degree → left down, right up.','A negative coefficient reverses both directions.'],F2+' · pp.1–2')
];
deepContent['polynomial/1']=[
DP('poly-reconstruct','Dari akar dan titik ke fungsi','From roots and a point to a function','P(x)=k(x+2)(x−1)(x−3)',
['Akar memberi faktor; titik tambahan memberi pengali k. Tanpa pembatasan derajat dan multiplicity, fungsi tidak selalu unik.','Untuk cubic dengan tiga akar berbeda −2,1,3, bentuk ini mencakup semua kemungkinan berderajat 3.'],
['Roots supply factors; an extra point supplies the scale k. Without degree and multiplicity restrictions, the function need not be unique.','For a cubic with distinct roots −2,1,3, this form covers every degree-3 possibility.'],
['P(0)=12 → 12=k(2)(−1)(−3)=6k.','k=2 sehingga P(x)=2(x+2)(x−1)(x−3).','Uji akar, intersep-y, dan arah ujung.'],
['P(0)=12 → 12=k(2)(−1)(−3)=6k.','k=2, so P(x)=2(x+2)(x−1)(x−3).','Check roots, y-intercept and end behaviour.'],F2+' · pp.2–3')
];
deepContent['polynomial/2']=[
DP('poly-shape','Melintas, menyentuh, dan tanda','Crossing, touching and signs','P(x)=(x+2)(x−1)²',
['Akar −2 bermultiplicity ganjil sehingga tanda berubah. Akar 1 bermultiplicity genap sehingga tanda tidak berubah.','Intersep-y P(0)=2; cubic positif mengarah kiri turun dan kanan naik. Titik balik tidak diberi koordinat tepat tanpa penurunan.'],
['The root −2 has odd multiplicity, so the sign changes. The root 1 has even multiplicity, so the sign does not change.','The y-intercept is P(0)=2; a positive cubic points down left and up right. Turning points are not assigned exact coordinates without derivation.'],
['Untuk x≠1, faktor (x−1)² positif sehingga tanda P mengikuti x+2.','P(x)<0 tepat saat x<−2.','P(x)≤0 memberi (−∞,−2] ∪ {1}; akar sentuh dapat menjadi titik solusi terisolasi.'],
['For x≠1, (x−1)² is positive, so P has the sign of x+2.','P(x)<0 exactly when x<−2.','P(x)≤0 gives (−∞,−2] ∪ {1}; a touching root can be an isolated solution.'],F2+' · pp.1–2,4','poly'),
DP('quartic-count','Garis horizontal dan jumlah solusi','Horizontal lines and solution counts','(x²−1)² = k',
['Persamaan f(x)=k berarti perpotongan grafik dengan garis y=k. Hitung input berbeda, bukan multiplicity akar.','Karena kuadrat luar, k<0 tidak mungkin. Untuk k≥0, x²=1±√k; periksa setiap ruas kanan.'],
['The equation f(x)=k represents intersections with y=k. Count distinct inputs, not root multiplicities.','The outer square rules out k<0. For k≥0, x²=1±√k; inspect each right-hand side.'],
['k<0: 0 solusi; k=0: x=±1 → 2 solusi.','0<k<1: kedua 1±√k positif → 4 solusi.','k=1: x=0, ±√2 → 3; k>1: hanya 1+√k positif → 2.'],
['k<0: 0 solutions; k=0: x=±1 → 2 solutions.','0<k<1: both 1±√k are positive → 4 solutions.','k=1: x=0, ±√2 → 3; k>1: only 1+√k is positive → 2.'],F2+' · p.4','quartic')
];
deepContent['rational/0']=[
DP('hole','Faktor hilang, larangan tetap','A cancelled factor keeps its restriction','(x−1)(x+2)/(x−1) = x+2,   x≠1',
['Mulai dengan penyebut asli. Menyederhanakan rumus tidak membuat input terlarang menjadi sah.','Pada x=1, perpanjangan garis akan bernilai 3. Grafik asli mempunyai lubang (1,3), bukan asimtot vertikal.'],
['Start from the original denominator. Simplifying the rule does not make an excluded input valid.','At x=1 the extended line would have value 3. The original graph has a hole at (1,3), not a vertical asymptote.'],
['Domain ℝ∖{1}.','Karena garis satu-ke-satu, output 3 hanya diperoleh dari input 1 yang dilarang.','Range ℝ∖{3}. Tandai lubang dengan lingkaran kosong.'],
['Domain ℝ∖{1}.','Because the line is one-to-one, output 3 requires the excluded input 1.','Range ℝ∖{3}. Mark the hole with an open circle.'],F2+' · p.4','hole')
];
deepContent['rational/1']=[
DP('reciprocal','Reciprocal: bentuk berasal dari aljabar','Reciprocal: shape follows algebra','y = a/(x−h)+k,   a≠0',
['x=h terlarang dan menjadi asimtot vertikal; y=k adalah asimtot horizontal. Domain ℝ∖{h}, range ℝ∖{k}.','Asimtot horizontal tidak selalu tak dapat dilintasi untuk semua fungsi. Khusus keluarga ini, a/(x−h) tidak pernah nol, sehingga y≠k.'],
['x=h is excluded and is a vertical asymptote; y=k is the horizontal asymptote. Domain ℝ∖{h}, range ℝ∖{k}.','A horizontal asymptote is not universally uncrossable. In this particular family a/(x−h) never vanishes, so y≠k.'],
['f(x)=2/(x−3)−1 → asimtot x=3 dan y=−1.','Intersep-x: 2/(x−3)=1 → x=5.','Intersep-y: f(0)=−2/3−1=−5/3.'],
['f(x)=2/(x−3)−1 → asymptotes x=3 and y=−1.','x-intercept: 2/(x−3)=1 → x=5.','y-intercept: f(0)=−2/3−1=−5/3.'],F2+' · p.3','reciprocal'),
DP('rational-rewrite','Pecahan linear: tulis bentuk reciprocal','Linear fractions: rewrite as a reciprocal','(2x+1)/(x−3) = 2 + 7/(x−3)',
['Pembagian atau pencocokan koefisien menampakkan asimtot. Tulis 2x+1=2(x−3)+7.','Akar pembilang memberi intersep-x hanya jika penyebut tidak nol di sana. Selalu periksa domain.'],
['Division or coefficient matching exposes the asymptotes. Write 2x+1=2(x−3)+7.','A numerator zero gives an x-intercept only if the denominator is nonzero there. Always check the domain.'],
['Asimtot x=3 dan y=2.','Intersep-x x=−1/2; intersep-y (0,−1/3).','Tanda pada interval yang dipisahkan −1/2 dan 3 adalah +, −, +.'],
['Asymptotes x=3 and y=2.','x-intercept x=−1/2; y-intercept (0,−1/3).','Signs in the intervals separated by −1/2 and 3 are +, −, +.'],F2+' · pp.3–4'),
DP('rational-sign','Pertidaksamaan rasional: nol dan larangan','Rational inequalities: zeros and exclusions','(x−2)/(x+1) ≤ 0',
['Jangan mengalikan dengan x+1 tanpa mengetahui tandanya. Susun titik kritis: nol pembilang dan nol penyebut.','Nilai yang dilarang tidak pernah termasuk solusi, walaupun simbolnya ≤ atau ≥.'],
['Do not multiply by x+1 without knowing its sign. Order the critical values: numerator zeros and denominator zeros.','An excluded value never belongs to the solution, even with ≤ or ≥.'],
['x=−1 tidak terdefinisi; x=2 menghasilkan nol.','Uji x=−2, 0, 3: tanda berturut-turut +, −, +.','Ambil bagian nonpositif: −1<x≤2.'],
['x=−1 is undefined; x=2 gives zero.','Test x=−2, 0, 3: signs are +, −, +.','Take the nonpositive part: −1<x≤2.'],F2+' · p.4'),
DP('rational-intersect','Perpotongan adalah solusi persamaan','Intersections are equation solutions','2/(x−1) = x+1,   x≠1',
['Titik potong memiliki output sama pada input yang sama. Larangan domain berlaku sebelum menghilangkan penyebut.','Peroleh input dengan aljabar; kemudian substitusi untuk memperoleh koordinat perpotongan.'],
['Intersection points have equal outputs at the same input. Domain restrictions apply before clearing denominators.','Find inputs algebraically, then substitute to obtain the intersection coordinates.'],
['2=(x+1)(x−1)=x²−1 → x²=3.','x=±√3, keduanya bukan 1 sehingga sah.','Koordinat: (√3,1+√3) dan (−√3,1−√3).'],
['2=(x+1)(x−1)=x²−1 → x²=3.','x=±√3; both differ from 1 and are valid.','Coordinates: (√3,1+√3) and (−√3,1−√3).'],F2+' · p.4')
];
