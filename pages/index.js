import React from 'react'
import Head from 'next/head'

import Product from '../components/product'

const Anasayfa = (props) => {
  return (
    <>
      <div className="anasayfa-container">
        <Head>
          <title>exported project</title>
        </Head>
        <main className="anasayfa-main">
          <section className="anasayfa-cover">
            <div className="anasayfa-covercorner">
              <div className="anasayfa-covertexts">
                <h3 className="anasayfa-text">
                  <span>Her Parçada Zerafet</span>
                </h3>
                <h1 className="anasayfa-text002">
                  <span>İçinizdeki Kadın İçin Mücevherler</span>
                </h1>
                <span className="anasayfa-text004">
                  <span>
                    En Şık Kaliteli, Takı Ve Aksesuarları Sizin İçin Seçtik.
                    Altın, Gümüş, Pırlanta, Zümrüt Ve Daha Birçok Değerli Taşın
                    Yer Aldığı Koleksiyonumuzu Keşfedin.
                  </span>
                </span>
              </div>
              <div className="anasayfa-coverbtns">
                <button className="anasayfa-button">
                  <span className="anasayfa-text006">
                    <span>SATIN AL</span>
                  </span>
                </button>
                <button className="anasayfa-button1">
                  <span className="anasayfa-text008">
                    <span>DAHA FAZLA</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="anasayfa-slogansection">
            <img
              alt="IMAGE2582"
              src="/external/image2582-khz8-500h.png"
              className="anasayfa-image"
            />
            <div className="anasayfa-bodycorner">
              <div className="anasayfa-bodytexts">
                <h3 className="anasayfa-text010">
                  <span>Şık Takılar ile stilinize zarafet katın.</span>
                </h3>
                <span className="anasayfa-text012">
                  <span>SAKURA</span>
                </span>
                <span className="anasayfa-text014">
                  <span>GOLD</span>
                </span>
                <span className="anasayfa-text016">
                  <span>
                    Şık Takılar, en moda ve benzersiz takıları sizin için bir
                    araya getiriyor. Her tarza ve her bütçeye uygun
                    mücevherlerimizle sizi buluşturuyoruz. Özel tasarım
                    yüzükler, kolyeler, bilezikler ve daha fazlasıyla kendinizi
                    özel hissetmenizi sağlıyoruz. Kaliteli malzemeler kullanarak
                    yarattığımız takılarımız, uzun ömürlü olacak şekilde
                    tasarlanmıştır.
                  </span>
                </span>
              </div>
              <div className="anasayfa-btns">
                <button className="anasayfa-button2">
                  <span className="anasayfa-text018">
                    <span>SATIN AL</span>
                  </span>
                </button>
                <button className="anasayfa-button3">
                  <span className="anasayfa-text020">
                    <span>DAHA FAZLA</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="anasayfa-featuredsection">
            <div className="anasayfa-sectiontitle">
              <div className="anasayfa-sectiontitle1">
                <h3 className="anasayfa-text022">
                  <span>En yeni ürünlerimizle şık görünün!</span>
                </h3>
                <h2 className="anasayfa-text024">
                  <span>ÖNE ÇIKAN ÜRÜNLER</span>
                </h2>
                <span className="anasayfa-text026">
                  <span>
                    Favorilerimiz arasından seçilmiş takılarla kendinizi özel
                    hissedin ve şıklığınıza şıklık katın.
                  </span>
                </span>
              </div>
            </div>
            <div className="anasayfa-featuredlist">
              <div className="anasayfa-captionlist">
                <img
                  alt="Vector3558"
                  src="/external/vector3558-w9xu.svg"
                  className="anasayfa-vector"
                />
                <div className="anasayfa-productlist">
                  <Product></Product>
                </div>
              </div>
              <div className="anasayfa-captionlist1">
                <img
                  alt="Vector3558"
                  src="/external/vector3558-aig.svg"
                  className="anasayfa-vector1"
                />
                <div className="anasayfa-productlist1"></div>
              </div>
            </div>
          </section>
          <section className="anasayfa-slogansection1">
            <img
              alt="IMAGE1614"
              src="/external/image1614-zrqq-400h.png"
              className="anasayfa-image01"
            />
            <div className="anasayfa-slogan">
              <div className="anasayfa-slogan1">
                <h2 className="anasayfa-text028">
                  <span>En Çok Talep Gören Ürünlerimizi Takip Edin</span>
                </h2>
                <span className="anasayfa-text030">
                  <span>
                    Sosyal medya hesaplarımızı takip ederek yeni ürünlerimizi
                    keşfedin ve trendleri yakından takip edin.
                  </span>
                </span>
                <div className="anasayfa-dc">
                  <img
                    alt="Rectangle1614"
                    src="/external/rectangle1614-3k2b-200w.png"
                    className="anasayfa-rectangle"
                  />
                  <span className="anasayfa-text032">
                    <span>
                      Bir mücevher, her zaman bir hikaye anlatır ve bu hikaye,
                      onu takan kişinin benzersizliğini yansıtır.
                    </span>
                  </span>
                </div>
              </div>
              <div className="anasayfa-socialimza">
                <div className="anasayfa-icons">
                  <div className="anasayfa-facebookicon">
                    <div className="anasayfa-group">
                      <img
                        alt="VectorI161"
                        src="/external/vectori161-sl8m.svg"
                        className="anasayfa-vector2"
                      />
                      <img
                        alt="Ellipse1I161"
                        src="/external/ellipse1i161-9mfa-200h.png"
                        className="anasayfa-ellipse1"
                      />
                    </div>
                  </div>
                  <img
                    alt="instagramicon1618"
                    src="/external/instagramicon1618-kme.svg"
                    className="anasayfa-instagramicon"
                  />
                </div>
                <span className="anasayfa-text034">
                  <span>Sakura Gold</span>
                </span>
              </div>
            </div>
          </section>
          <section className="anasayfa-wedding">
            <div className="anasayfa-sectiontitle2">
              <div className="anasayfa-sectiontitle3">
                <h3 className="anasayfa-text036">
                  <span>Bir Ömür Boyu Sürecek</span>
                </h3>
                <h2 className="anasayfa-text038">
                  <span>NİŞAN &amp; DÜĞÜN</span>
                </h2>
                <span className="anasayfa-text040">
                  <span>
                    Aşkın taçlandığı, geleceğe dair umutların paylaşıldığı özel
                    bir gün
                  </span>
                </span>
              </div>
            </div>
            <div className="anasayfa-productlist2">
              <div className="anasayfa-product">
                <img
                  alt="IMAGEI222"
                  src="/external/imagei222-u5j-200h.png"
                  className="anasayfa-image02"
                />
                <div className="anasayfa-texts">
                  <div className="anasayfa-producttext">
                    <span className="anasayfa-text042">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text044">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice">
                    <div className="anasayfa-oldprice">
                      <span className="anasayfa-text046">₺</span>
                      <span className="anasayfa-text047">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice">
                      <span className="anasayfa-text049">₺</span>
                      <span className="anasayfa-text050">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons">
                  <div className="anasayfa-soldout">
                    <span className="anasayfa-text052">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona">
                    <span className="anasayfa-text054">
                      <span>Yenİ</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="anasayfa-product01">
                <img
                  alt="IMAGEI222"
                  src="/external/imagei222-26xt-200h.png"
                  className="anasayfa-image03"
                />
                <div className="anasayfa-texts01">
                  <div className="anasayfa-producttext1">
                    <span className="anasayfa-text056">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text058">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice01">
                    <div className="anasayfa-oldprice01">
                      <span className="anasayfa-text060">₺</span>
                      <span className="anasayfa-text061">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice01">
                      <span className="anasayfa-text063">₺</span>
                      <span className="anasayfa-text064">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons1">
                  <div className="anasayfa-soldout1">
                    <span className="anasayfa-text066">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona1">
                    <span className="anasayfa-text068">
                      <span>Yenİ</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="anasayfa-product02">
                <img
                  alt="IMAGEI222"
                  src="/external/imagei222-fw3s-200h.png"
                  className="anasayfa-image04"
                />
                <div className="anasayfa-texts02">
                  <div className="anasayfa-producttext2">
                    <span className="anasayfa-text070">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text072">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice02">
                    <div className="anasayfa-oldprice02">
                      <span className="anasayfa-text074">₺</span>
                      <span className="anasayfa-text075">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice02">
                      <span className="anasayfa-text077">₺</span>
                      <span className="anasayfa-text078">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons2">
                  <div className="anasayfa-soldout2">
                    <span className="anasayfa-text080">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona2">
                    <span className="anasayfa-text082">
                      <span>Yenİ</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="anasayfa-product03">
                <img
                  alt="IMAGEI222"
                  src="/external/imagei222-3g5g-200h.png"
                  className="anasayfa-image05"
                />
                <div className="anasayfa-texts03">
                  <div className="anasayfa-producttext3">
                    <span className="anasayfa-text084">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text086">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice03">
                    <div className="anasayfa-oldprice03">
                      <span className="anasayfa-text088">₺</span>
                      <span className="anasayfa-text089">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice03">
                      <span className="anasayfa-text091">₺</span>
                      <span className="anasayfa-text092">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons3">
                  <div className="anasayfa-soldout3">
                    <span className="anasayfa-text094">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona3">
                    <span className="anasayfa-text096">
                      <span>Yenİ</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="anasayfa-indirimsection">
            <img
              alt="IMAGE2230"
              src="/external/image2230-eiw-200h.png"
              className="anasayfa-image06"
            />
            <div className="anasayfa-indirimcorner">
              <div className="anasayfa-texts04">
                <div className="anasayfa-subtitle">
                  <h2 className="anasayfa-text098">
                    <span>20%</span>
                  </h2>
                  <h2 className="anasayfa-text100">
                    <span>İNDİRİM</span>
                  </h2>
                </div>
                <h2 className="anasayfa-text102">
                  <span>TÜM ALTIN YÜZÜKLERDE</span>
                </h2>
                <span className="anasayfa-text104">
                  <span>
                    Tarzınıza ve bütçenize uygun altın yüzükler şimdi çok daha
                    uygun fiyatlarla! Tüm altın yüzüklerde geçerli %20 indirim
                    fırsatını kaçırmayın. Sevdiklerinize hediye edin ya da
                    kendinizi şımartın. Altın yüzüklerdeki bu özel teklifi
                    kaçırmak istemeyeceksiniz.
                  </span>
                </span>
              </div>
              <div className="anasayfa-btns1">
                <button className="anasayfa-button4">
                  <span className="anasayfa-text106">
                    <span>SATIN AL</span>
                  </span>
                </button>
                <button className="anasayfa-button5">
                  <span className="anasayfa-text108">
                    <span>DAHA FAZLA</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section className="anasayfa-teklifsection">
            <div className="anasayfa-teklifcorner">
              <div className="anasayfa-texts05">
                <div className="anasayfa-texts06">
                  <h2 className="anasayfa-text110">
                    <span>Özel Teklif</span>
                  </h2>
                  <h3 className="anasayfa-text112">
                    <span>Pırlanta</span>
                  </h3>
                  <h3 className="anasayfa-text114">
                    <span>Kolye</span>
                  </h3>
                  <span className="anasayfa-text116">
                    <span>Zarafetin simgesi pırlanta kolye</span>
                  </span>
                </div>
                <button className="anasayfa-button6">
                  <span className="anasayfa-text118">
                    <span>SATIN AL</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="anasayfa-teklifproducts">
              <div className="anasayfa-onecikan">
                <h2 className="anasayfa-text120">
                  <span>ÖNE ÇIKAN ÜRÜNLER</span>
                </h2>
                <div className="anasayfa-productlist3">
                  <div className="anasayfa-product04">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-hltp-200h.png"
                      className="anasayfa-image07"
                    />
                    <div className="anasayfa-texts07">
                      <span className="anasayfa-text122">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice04">
                        <div className="anasayfa-oldprice04">
                          <span className="anasayfa-text124">₺</span>
                          <span className="anasayfa-text125">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice04">
                          <span className="anasayfa-text127">₺</span>
                          <span className="anasayfa-text128">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anasayfa-product05">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-8hfl-200h.png"
                      className="anasayfa-image08"
                    />
                    <div className="anasayfa-texts08">
                      <span className="anasayfa-text130">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice05">
                        <div className="anasayfa-oldprice05">
                          <span className="anasayfa-text132">₺</span>
                          <span className="anasayfa-text133">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice05">
                          <span className="anasayfa-text135">₺</span>
                          <span className="anasayfa-text136">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anasayfa-product06">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-7de-200h.png"
                      className="anasayfa-image09"
                    />
                    <div className="anasayfa-texts09">
                      <span className="anasayfa-text138">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice06">
                        <div className="anasayfa-oldprice06">
                          <span className="anasayfa-text140">₺</span>
                          <span className="anasayfa-text141">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice06">
                          <span className="anasayfa-text143">₺</span>
                          <span className="anasayfa-text144">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anasayfa-yeniurunler">
                <h2 className="anasayfa-text146">
                  <span>YENİ ÜRÜNLER</span>
                </h2>
                <div className="anasayfa-productlist4">
                  <div className="anasayfa-product07">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-uwp7-200h.png"
                      className="anasayfa-image10"
                    />
                    <div className="anasayfa-texts10">
                      <span className="anasayfa-text148">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice07">
                        <div className="anasayfa-oldprice07">
                          <span className="anasayfa-text150">₺</span>
                          <span className="anasayfa-text151">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice07">
                          <span className="anasayfa-text153">₺</span>
                          <span className="anasayfa-text154">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anasayfa-product08">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-1ti-200h.png"
                      className="anasayfa-image11"
                    />
                    <div className="anasayfa-texts11">
                      <span className="anasayfa-text156">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice08">
                        <div className="anasayfa-oldprice08">
                          <span className="anasayfa-text158">₺</span>
                          <span className="anasayfa-text159">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice08">
                          <span className="anasayfa-text161">₺</span>
                          <span className="anasayfa-text162">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="anasayfa-product09">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-8df7-200h.png"
                      className="anasayfa-image12"
                    />
                    <div className="anasayfa-texts12">
                      <span className="anasayfa-text164">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice09">
                        <div className="anasayfa-oldprice09">
                          <span className="anasayfa-text166">₺</span>
                          <span className="anasayfa-text167">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice09">
                          <span className="anasayfa-text169">₺</span>
                          <span className="anasayfa-text170">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="anasayfa-kesfetsection">
            <div className="anasayfa-sectiontitle4">
              <h3 className="anasayfa-text172">
                <span>Keşfedin ve Satın Alın</span>
              </h3>
              <h2 className="anasayfa-text174">
                <span>İNSTAGRAM&apos;DAN ALIŞVERİŞ YAPIN</span>
              </h2>
              <span className="anasayfa-text176">
                <span>
                  Instagram&apos;dan alışveriş yapın, tarzınızı keşfedin!
                </span>
              </span>
            </div>
            <div className="anasayfa-images">
              <div className="anasayfa-imgs">
                <img
                  alt="IMAGE2532"
                  src="/external/image2532-ffxe-300h.png"
                  className="anasayfa-image13"
                />
                <img
                  alt="IMAGE2532"
                  src="/external/image2532-ffpf-300h.png"
                  className="anasayfa-image14"
                />
                <img
                  alt="IMAGE2532"
                  src="/external/image2532-mly8-300h.png"
                  className="anasayfa-image15"
                />
                <img
                  alt="IMAGE2532"
                  src="/external/image2532-6ajk-300h.png"
                  className="anasayfa-image16"
                />
              </div>
              <div className="anasayfa-dots">
                <img
                  alt="Ellipse22532"
                  src="/external/ellipse22532-eu2u-200h.png"
                  className="anasayfa-ellipse2"
                />
                <img
                  alt="Ellipse32532"
                  src="/external/ellipse32532-kewh-200h.png"
                  className="anasayfa-ellipse3"
                />
                <img
                  alt="Ellipse42533"
                  src="/external/ellipse42533-jvd9-200h.png"
                  className="anasayfa-ellipse4"
                />
              </div>
            </div>
          </section>
          <section className="anasayfa-kayitsection">
            <form className="anasayfa-form">
              <div className="anasayfa-texts13">
                <h2 className="anasayfa-text178">
                  <span>
                    Bize katılın %20&apos;ye kadar indirimlerden faydalanın.
                  </span>
                </h2>
                <span className="anasayfa-text180">
                  <span>
                    Sizi özel fırsatlarla dolu bir dünyaya davet ediyoruz! Bize
                    katılın ve her ay %20&apos;ye kadar indirimlerden
                    faydalanın. Ayrıcalıklarımızdan yararlanmak için hemen
                    katılın!
                  </span>
                </span>
              </div>
              <div className="anasayfa-kayitol">
                <input
                  type="text"
                  placeholder="E Posta Adresi"
                  className="anasayfa-textinput input"
                />
                <button type="submit" className="anasayfa-button7 button">
                  KAYIT OL
                </button>
              </div>
            </form>
            <div className="anasayfa-bultentexts">
              <h3 className="anasayfa-text182">
                <span>MÜŞTERİLERİMİZ NE DİYOR</span>
              </h3>
              <img
                alt="IMAGE2534"
                src="/external/image2534-by0g-200h.png"
                className="anasayfa-image17"
              />
              <span className="anasayfa-text184">
                <span>
                  Sakura Gold, harika bir hizmet sunuyor! İlk kez buradan bir
                  yüzük satın aldım ve ürünün kalitesi beni gerçekten etkiledi.
                  Ayrıca, müşteri hizmetleri ekibi de çok yardımcı oldu ve tüm
                  sorularıma hızlı bir şekilde cevap verdi. Ürünüm hızlı bir
                  şekilde geldi ve çok güzel bir hediye kutusunda paketlenmişti.
                  Kesinlikle tekrar alışveriş yapacağım ve herkese Örnek
                  Kuyumcu&apos;yu tavsiye ederim!
                </span>
              </span>
              <div className="anasayfa-name">
                <span className="anasayfa-text186">
                  <span>Ayşe G.</span>
                </span>
                <span className="anasayfa-text188">
                  <span>Mutlu Müşteri</span>
                </span>
              </div>
            </div>
          </section>
          <footer className="anasayfa-footersection">
            <div className="anasayfa-up">
              <div className="anasayfa-footerinfo">
                <div className="anasayfa-footerinfo1">
                  <img
                    alt="logo2831"
                    src="/external/logo2831-q81j-200h.png"
                    className="anasayfa-logo"
                  />
                  <div className="anasayfa-address">
                    <div className="anasayfa-addresstext">
                      <div className="anasayfa-group1">
                        <div className="anasayfa-group2">
                          <div className="anasayfa-group3">
                            <img
                              alt="Vector2831"
                              src="/external/vector2831-4szj.svg"
                              className="anasayfa-vector3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="anasayfa-address1">
                        <span className="anasayfa-text190">
                          <span>Merdivenköy Mahallesi Seyhan Sokak</span>
                        </span>
                        <span className="anasayfa-text192">
                          <span>Brooklyn Park C/152 Kadıköy/İstanbul</span>
                        </span>
                      </div>
                    </div>
                    <div className="anasayfa-phonetext">
                      <div className="anasayfa-group4">
                        <div className="anasayfa-group5">
                          <img
                            alt="Vector2832"
                            src="/external/vector2832-p96d.svg"
                            className="anasayfa-vector4"
                          />
                        </div>
                      </div>
                      <span className="anasayfa-text194">
                        <span>Phone: (544) 224-1449</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anasayfa-footerlinks">
                <div>
                  <span className="anasayfa-text196">
                    <span>Kurumsal</span>
                  </span>
                  <div className="anasayfa-links">
                    <span className="anasayfa-text198">
                      <span>Hakkımızda</span>
                    </span>
                    <span className="anasayfa-text200">
                      <span>İletişim</span>
                    </span>
                  </div>
                </div>
                <div className="anasayfa-links2">
                  <span className="anasayfa-text202">
                    <span>Faydalı Bağlantılar</span>
                  </span>
                  <div className="anasayfa-links1 anasayfa-links1">
                    <span className="anasayfa-text204">
                      <span>Gizlilik Politikası</span>
                    </span>
                    <span className="anasayfa-text206">
                      <span>İade ve Değişim</span>
                    </span>
                    <span className="anasayfa-text208">
                      <span>şartlar ve koşullar</span>
                    </span>
                    <span className="anasayfa-text210">
                      <span>Site Haritası</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="anasayfa-down">
              <img
                alt="Rectangle2833"
                src="/external/rectangle2833-erb51e-200h.png"
                className="anasayfa-rectangle1"
              />
              <div className="anasayfa-copyright">
                <span className="anasayfa-text212">
                  2023 Sakura Gold. Tüm hakları saklıdır.
                </span>
                <img
                  alt="IMAGE2833"
                  src="/external/image2833-qvi8-200h.png"
                  className="anasayfa-image18"
                />
              </div>
            </div>
          </footer>
        </main>
      </div>
      <style jsx>
        {`
          .anasayfa-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-main {
            height: auto;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(244, 244, 244, 1);
          }
          .anasayfa-cover {
            gap: 10px;
            height: 100vh;
            display: flex;
            padding: 150px;
            align-self: stretch;
            align-items: flex-end;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxqZXdlbHJ5fGVufDB8fHx8MTY5ODU4MTIyNHww&ixlib=rb-4.0.3&w=1500');
          }
          .anasayfa-covercorner {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 490px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-covertexts {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 21px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text002 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 54px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 60px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text004 {
            color: rgba(255, 255, 255, 0.800000011920929);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-coverbtns {
            gap: 30px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-button {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .anasayfa-text006 {
            color: rgba(0, 0, 0, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-button1 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(255, 255, 255, 0.800000011920929);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .anasayfa-text008 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-slogansection {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-image {
            flex: 1;
            width: 594px;
            height: 450px;
          }
          .anasayfa-bodycorner {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-bodytexts {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text010 {
            color: rgba(195, 147, 91, 1);
            height: auto;
            font-size: 22px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text012 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 64px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text014 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 56px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text016 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-btns {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-button2 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .anasayfa-text018 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-button3 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(233, 233, 233, 1);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .anasayfa-text020 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-featuredsection {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-sectiontitle {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-sectiontitle1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text022 {
            color: rgba(195, 147, 91, 1);
            height: auto;
            font-size: 21px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text024 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 29px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text026 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-featuredlist {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-captionlist {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-vector {
            width: auto;
            height: auto;
            max-width: 280px;
            box-sizing: content-box;
          }
          .anasayfa-productlist {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
          }
          .anasayfa-captionlist1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-vector1 {
            width: auto;
            height: auto;
            max-width: 280px;
            box-sizing: content-box;
          }
          .anasayfa-productlist1 {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-start;
          }
          .anasayfa-slogansection1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-image01 {
            width: auto;
            height: 400px;
          }
          .anasayfa-slogan {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 587.5px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 1);
          }
          .anasayfa-slogan1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .anasayfa-text028 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 38px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 48px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text030 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-dc {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-rectangle {
            width: 4px;
            height: 45px;
          }
          .anasayfa-text032 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            flex-grow: 1;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-socialimza {
            gap: 269px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .anasayfa-icons {
            gap: 10px;
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-facebookicon {
            width: 30px;
            height: 30px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-group {
            top: 0px;
            left: 0px;
            width: 30px;
            height: 30px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-vector2 {
            top: 7.21539306640625px;
            left: 11.223944664001465px;
            width: 8px;
            height: 16px;
            position: absolute;
          }
          .anasayfa-ellipse1 {
            top: 0px;
            left: 0px;
            width: 30px;
            height: 30px;
            position: absolute;
            border-color: rgba(204, 204, 204, 1);
            border-style: solid;
            border-width: 2px;
          }
          .anasayfa-instagramicon {
            width: 30px;
            height: 30px;
          }
          .anasayfa-text034 {
            color: rgba(36, 36, 36, 1);
            width: 78px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: right;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-wedding {
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-sectiontitle2 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-sectiontitle3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text036 {
            color: rgba(195, 147, 91, 1);
            height: auto;
            font-size: 21px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text038 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 29px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text040 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productlist2 {
            gap: 20px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-product {
            gap: 5px;
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-image02 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .anasayfa-texts {
            gap: 5px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-producttext {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text042 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text044 {
            color: rgba(165, 165, 165, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 21.280000686645508px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-oldprice {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text046 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text047 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text049 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text050 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbons {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-soldout {
            gap: 10px;
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: center;
          }
          .anasayfa-text052 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 14.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbona {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .anasayfa-text054 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product01 {
            gap: 5px;
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-image03 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .anasayfa-texts01 {
            gap: 5px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-producttext1 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text056 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text058 {
            color: rgba(165, 165, 165, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 21.280000686645508px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice01 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-oldprice01 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text060 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text061 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice01 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text063 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text064 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbons1 {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-soldout1 {
            gap: 10px;
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: center;
          }
          .anasayfa-text066 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 14.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbona1 {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .anasayfa-text068 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product02 {
            gap: 5px;
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-image04 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .anasayfa-texts02 {
            gap: 5px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-producttext2 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text070 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text072 {
            color: rgba(165, 165, 165, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 21.280000686645508px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice02 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-oldprice02 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text074 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text075 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice02 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text077 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text078 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbons2 {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-soldout2 {
            gap: 10px;
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: center;
          }
          .anasayfa-text080 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 14.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbona2 {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .anasayfa-text082 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product03 {
            gap: 5px;
            width: 280px;
            display: flex;
            position: relative;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-image05 {
            width: auto;
            height: auto;
            flex-grow: 1;
            align-self: stretch;
          }
          .anasayfa-texts03 {
            gap: 5px;
            display: flex;
            z-index: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-producttext3 {
            gap: 5px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text084 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text086 {
            color: rgba(165, 165, 165, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 21.280000686645508px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice03 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-oldprice03 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text088 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text089 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice03 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text091 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text092 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbons3 {
            gap: 10px;
            top: 0px;
            left: 0px;
            display: flex;
            z-index: 2;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-soldout3 {
            gap: 10px;
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: center;
          }
          .anasayfa-text094 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 14.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-ribbona3 {
            gap: 10px;
            width: 50px;
            height: 50px;
            display: flex;
            padding: 7px 5px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 35px;
            justify-content: center;
            background-color: rgba(67, 142, 68, 1);
          }
          .anasayfa-text096 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 16.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-indirimsection {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-image06 {
            flex: 1;
            width: auto;
            height: auto;
            flex-grow: 1;
          }
          .anasayfa-indirimcorner {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 500px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-texts04 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-subtitle {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-text098 {
            color: rgba(195, 147, 91, 1);
            width: 141px;
            height: auto;
            font-size: 63px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text100 {
            color: rgba(36, 36, 36, 1);
            width: 266px;
            height: auto;
            font-size: 64px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 75px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text102 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 56px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text104 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-btns1 {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-button4 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .anasayfa-text106 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-button5 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            border-color: rgba(233, 233, 233, 1);
            border-style: solid;
            border-width: 2px;
            justify-content: center;
          }
          .anasayfa-text108 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-teklifsection {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-teklifcorner {
            flex: 1;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGpld2Vscnl8ZW58MHx8fHwxNjk4NTgxMTk1fDA&ixlib=rb-4.0.3&w=200');
          }
          .anasayfa-texts05 {
            gap: 10px;
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: flex-end;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: flex-end;
          }
          .anasayfa-texts06 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text110 {
            color: rgba(86, 86, 86, 1);
            height: auto;
            font-size: 17px;
            align-self: stretch;
            font-style: Regular;
            text-align: right;
            font-family: Lora;
            font-weight: 400;
            line-height: 28.799999237060547px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text112 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 54px;
            align-self: stretch;
            font-style: Regular;
            text-align: right;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 59.400001525878906px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text114 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 54px;
            align-self: stretch;
            font-style: Regular;
            text-align: right;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 59.400001525878906px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text116 {
            color: rgba(45, 42, 42, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: right;
            font-family: Poppins;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-button6 {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .anasayfa-text118 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 13px;
            font-style: SemiBold;
            text-align: left;
            font-family: Lora;
            font-weight: 600;
            line-height: 18px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-teklifproducts {
            gap: 25px;
            flex: 1;
            width: 462px;
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-onecikan {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text120 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 25.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productlist3 {
            gap: 22px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-product04 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image07 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts07 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text122 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice04 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice04 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text124 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text125 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice04 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text127 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text128 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product05 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image08 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts08 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text130 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice05 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice05 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text132 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text133 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice05 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text135 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text136 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product06 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image09 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts09 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text138 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice06 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice06 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text140 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text141 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice06 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text143 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text144 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-yeniurunler {
            gap: 20px;
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text146 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 25.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productlist4 {
            gap: 22px;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-product07 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image10 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts10 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text148 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice07 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice07 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text150 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text151 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice07 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text153 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text154 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product08 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image11 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts11 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text156 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice08 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice08 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text158 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text159 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice08 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text161 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text162 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-product09 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-image12 {
            width: 65px;
            height: 65px;
          }
          .anasayfa-texts12 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text164 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-productprice09 {
            gap: 2px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: flex-start;
          }
          .anasayfa-oldprice09 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text166 {
            color: rgba(187, 187, 187, 1);
            width: 7px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text167 {
            color: rgba(187, 187, 187, 1);
            width: 52px;
            height: auto;
            font-size: 12px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 16.3799991607666px;
            font-stretch: normal;
            text-decoration: line-through;
          }
          .anasayfa-newprice09 {
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-text169 {
            color: rgba(195, 147, 91, 1);
            width: 8px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text170 {
            color: rgba(195, 147, 91, 1);
            width: 57px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 18.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-kesfetsection {
            gap: 20px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-sectiontitle4 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text172 {
            color: rgba(195, 147, 91, 1);
            height: auto;
            font-size: 21px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 32px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text174 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 29px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text176 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-images {
            gap: var(--dl-space-space-unit);
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-imgs {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .anasayfa-image13 {
            width: auto;
            height: 291px;
            flex-grow: 1;
          }
          .anasayfa-image14 {
            width: auto;
            height: 291px;
            flex-grow: 1;
          }
          .anasayfa-image15 {
            width: auto;
            height: 291px;
            flex-grow: 1;
          }
          .anasayfa-image16 {
            width: auto;
            height: 291px;
            flex-grow: 1;
          }
          .anasayfa-dots {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
          }
          .anasayfa-ellipse2 {
            width: 10px;
            height: 10px;
          }
          .anasayfa-ellipse3 {
            width: 10px;
            height: 10px;
          }
          .anasayfa-ellipse4 {
            width: 10px;
            height: 10px;
          }
          .anasayfa-kayitsection {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .anasayfa-form {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .anasayfa-texts13 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text178 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 30px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text180 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-kayitol {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .anasayfa-textinput {
            flex: 1;
            align-self: stretch;
            border-color: var(--dl-color-gray-500);
          }
          .anasayfa-button7 {
            color: rgba(255, 255, 255, 1);
            font-size: 13px;
            text-align: left;
            font-family: 'Lora';
            line-height: 1.18;
            padding-top: 10px;
            border-width: 0px;
            padding-left: 35px;
            border-radius: 0px;
            padding-right: 35px;
            padding-bottom: 10px;
            background-color: #c3935b;
          }
          .anasayfa-bultentexts {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text182 {
            color: rgba(36, 36, 36, 1);
            height: auto;
            font-size: 29px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 40px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-image17 {
            width: 100px;
            height: 86px;
          }
          .anasayfa-text184 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-name {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .anasayfa-text186 {
            color: rgba(36, 36, 36, 1);
            width: 52px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text188 {
            color: rgba(119, 119, 119, 1);
            width: 93px;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: center;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-footersection {
            gap: 50px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: rgba(234, 234, 234, 1);
          }
          .anasayfa-up {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .anasayfa-footerinfo {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-footerinfo1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-logo {
            width: 150px;
            height: 150px;
          }
          .anasayfa-address {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-addresstext {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-group1 {
            width: 14px;
            height: 14.000008583068848px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-group2 {
            top: 0px;
            left: 0px;
            width: 13.999933242797852px;
            height: 14.000008583068848px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-group3 {
            top: 0px;
            left: 0px;
            width: 13.999933242797852px;
            height: 14.000008583068848px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-vector3 {
            top: -0.000007138980436138809px;
            left: 0.000025043180357897654px;
            width: 14px;
            height: 14px;
            position: absolute;
          }
          .anasayfa-address1 {
            width: 276.00006103515625px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text190 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text192 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-phonetext {
            gap: 13px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .anasayfa-group4 {
            width: 8px;
            height: 13.999999046325684px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-group5 {
            top: 0px;
            left: 0px;
            width: 7.927992820739746px;
            height: 13.999999046325684px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-vector4 {
            top: 0px;
            left: 0px;
            width: 8px;
            height: 14px;
            position: absolute;
          }
          .anasayfa-text194 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            flex-grow: 1;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 22.399999618530273px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-footerlinks {
            gap: 150px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: center;
          }
          .anasayfa-links1 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text196 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 25.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-links {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text198 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text200 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-links2 {
            gap: 20px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text202 {
            color: rgba(51, 51, 51, 1);
            height: auto;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Marcellus SC;
            font-weight: 400;
            line-height: 25.200000762939453px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-links1 {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text204 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text206 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text208 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-text210 {
            color: rgba(119, 119, 119, 1);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Lora;
            font-weight: 400;
            line-height: 19.600000381469727px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-down {
            gap: 25px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-rectangle1 {
            width: auto;
            height: 1px;
            align-self: stretch;
          }
          .anasayfa-copyright {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .anasayfa-text212 {
            color: rgb(119, 119, 119);
            width: auto;
            height: auto;
            font-size: 13px;
            font-style: Regular;
            text-align: left;
            font-family: 'Lora';
            font-weight: 400;
            line-height: 16.8px;
            font-stretch: normal;
            text-decoration: none;
          }
          .anasayfa-image18 {
            width: 255px;
            height: 22px;
          }
          @media (max-width: 991px) {
            .anasayfa-cover {
              align-items: center;
            }
            .anasayfa-text {
              text-align: center;
            }
            .anasayfa-text002 {
              text-align: center;
            }
            .anasayfa-text004 {
              text-align: center;
            }
            .anasayfa-coverbtns {
              justify-content: center;
            }
            .anasayfa-slogansection {
              align-items: center;
              flex-direction: column;
            }
            .anasayfa-vector {
              display: none;
            }
            .anasayfa-vector1 {
              display: none;
            }
            .anasayfa-slogansection1 {
              flex-direction: column;
            }
            .anasayfa-indirimsection {
              align-items: center;
              flex-direction: column;
            }
            .anasayfa-teklifsection {
              align-items: center;
              flex-direction: column;
            }
            .anasayfa-kayitsection {
              flex-direction: column;
            }
            .anasayfa-form {
              width: 500px;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .anasayfa-image {
              height: auto;
              align-self: stretch;
            }
            .anasayfa-bodycorner {
              width: auto;
              align-self: stretch;
            }
            .anasayfa-image01 {
              width: auto;
              height: auto;
              align-self: stretch;
            }
            .anasayfa-slogan {
              width: auto;
            }
            .anasayfa-image06 {
              width: auto;
              height: auto;
              align-self: stretch;
            }
            .anasayfa-indirimcorner {
              width: auto;
            }
            .anasayfa-teklifcorner {
              width: auto;
              align-self: stretch;
            }
            .anasayfa-teklifproducts {
              width: auto;
            }
            .anasayfa-form {
              width: auto;
            }
            .anasayfa-up {
              justify-content: center;
            }
            .anasayfa-footerlinks {
              display: none;
            }
            .anasayfa-copyright {
              gap: var(--dl-space-space-halfunit);
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
          }
          @media (max-width: 479px) {
            .anasayfa-cover {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-covercorner {
              width: auto;
            }
            .anasayfa-slogansection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-image {
              width: auto;
            }
            .anasayfa-featuredsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-slogansection1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-slogan {
              width: auto;
              align-self: stretch;
            }
            .anasayfa-wedding {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-indirimsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-indirimcorner {
              width: auto;
              align-self: stretch;
            }
            .anasayfa-teklifsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-teklifproducts {
              width: auto;
              align-self: stretch;
              flex-direction: column;
            }
            .anasayfa-kesfetsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-kayitsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-bultentexts {
              width: auto;
              align-self: stretch;
            }
            .anasayfa-footersection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Anasayfa
