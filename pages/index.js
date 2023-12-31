import React from 'react'
import Head from 'next/head'

import Covercorner from '../components/covercorner'
import Bodycorner from '../components/bodycorner'
import Product from '../components/product'
import Slogan from '../components/slogan'
import Indirimcorner from '../components/indirimcorner'

const Anasayfa = (props) => {
  return (
    <>
      <div className="anasayfa-container">
        <Head>
          <title>exported project</title>
        </Head>
        <main className="anasayfa-main">
          <section className="anasayfa-cover">
            <Covercorner></Covercorner>
          </section>
          <section className="anasayfa-slogansection">
            <img
              alt="IMAGE2582"
              src="/external/image2582-khz8-500w.png"
              className="anasayfa-image"
            />
            <Bodycorner rootClassName="bodycorner-root-class-name"></Bodycorner>
          </section>
          <section className="anasayfa-featuredsection">
            <div className="anasayfa-sectiontitle">
              <div className="anasayfa-sectiontitle1">
                <h3 className="anasayfa-text">
                  <span>En yeni ürünlerimizle şık görünün!</span>
                </h3>
                <h2 className="anasayfa-text002">
                  <span>ÖNE ÇIKAN ÜRÜNLER</span>
                </h2>
                <span className="anasayfa-text004">
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
              src="/external/image1614-zrqq-900w.png"
              className="anasayfa-image01"
            />
            <Slogan></Slogan>
          </section>
          <section className="anasayfa-wedding">
            <div className="anasayfa-sectiontitle2">
              <div className="anasayfa-sectiontitle3">
                <h3 className="anasayfa-text006">
                  <span>Bir Ömür Boyu Sürecek</span>
                </h3>
                <h2 className="anasayfa-text008">
                  <span>NİŞAN &amp; DÜĞÜN</span>
                </h2>
                <span className="anasayfa-text010">
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
                    <span className="anasayfa-text012">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text014">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice">
                    <div className="anasayfa-oldprice">
                      <span className="anasayfa-text016">₺</span>
                      <span className="anasayfa-text017">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice">
                      <span className="anasayfa-text019">₺</span>
                      <span className="anasayfa-text020">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons">
                  <div className="anasayfa-soldout">
                    <span className="anasayfa-text022">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona">
                    <span className="anasayfa-text024">
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
                    <span className="anasayfa-text026">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text028">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice01">
                    <div className="anasayfa-oldprice01">
                      <span className="anasayfa-text030">₺</span>
                      <span className="anasayfa-text031">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice01">
                      <span className="anasayfa-text033">₺</span>
                      <span className="anasayfa-text034">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons1">
                  <div className="anasayfa-soldout1">
                    <span className="anasayfa-text036">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona1">
                    <span className="anasayfa-text038">
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
                    <span className="anasayfa-text040">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text042">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice02">
                    <div className="anasayfa-oldprice02">
                      <span className="anasayfa-text044">₺</span>
                      <span className="anasayfa-text045">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice02">
                      <span className="anasayfa-text047">₺</span>
                      <span className="anasayfa-text048">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons2">
                  <div className="anasayfa-soldout2">
                    <span className="anasayfa-text050">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona2">
                    <span className="anasayfa-text052">
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
                    <span className="anasayfa-text054">
                      <span>Altın Harf Kolye – Özel Tasarım H Kolye</span>
                    </span>
                    <span className="anasayfa-text056">
                      <span>Yüzükler</span>
                    </span>
                  </div>
                  <div className="anasayfa-productprice03">
                    <div className="anasayfa-oldprice03">
                      <span className="anasayfa-text058">₺</span>
                      <span className="anasayfa-text059">
                        <span>3.000,00</span>
                      </span>
                    </div>
                    <div className="anasayfa-newprice03">
                      <span className="anasayfa-text061">₺</span>
                      <span className="anasayfa-text062">
                        <span>2.500,00</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="anasayfa-ribbons3">
                  <div className="anasayfa-soldout3">
                    <span className="anasayfa-text064">
                      <span>Tükendİ</span>
                    </span>
                  </div>
                  <div className="anasayfa-ribbona3">
                    <span className="anasayfa-text066">
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
              src="/external/image2230-eiw-500w.png"
              className="anasayfa-image06"
            />
            <Indirimcorner rootClassName="indirimcorner-root-class-name"></Indirimcorner>
          </section>
          <section className="anasayfa-teklifsection">
            <div className="anasayfa-teklifcorner">
              <div className="anasayfa-texts04">
                <div className="anasayfa-texts05">
                  <h2 className="anasayfa-text068">
                    <span>Özel Teklif</span>
                  </h2>
                  <h3 className="anasayfa-text070">
                    <span>Pırlanta</span>
                  </h3>
                  <h3 className="anasayfa-text072">
                    <span>Kolye</span>
                  </h3>
                  <span className="anasayfa-text074">
                    <span>Zarafetin simgesi pırlanta kolye</span>
                  </span>
                </div>
                <button className="anasayfa-button">
                  <span className="anasayfa-text076">
                    <span>SATIN AL</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="anasayfa-teklifproducts">
              <div className="anasayfa-onecikan">
                <h2 className="anasayfa-text078">
                  <span>ÖNE ÇIKAN ÜRÜNLER</span>
                </h2>
                <div className="anasayfa-productlist3">
                  <div className="anasayfa-product04">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-hltp-200h.png"
                      className="anasayfa-image07"
                    />
                    <div className="anasayfa-texts06">
                      <span className="anasayfa-text080">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice04">
                        <div className="anasayfa-oldprice04">
                          <span className="anasayfa-text082">₺</span>
                          <span className="anasayfa-text083">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice04">
                          <span className="anasayfa-text085">₺</span>
                          <span className="anasayfa-text086">
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
                    <div className="anasayfa-texts07">
                      <span className="anasayfa-text088">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice05">
                        <div className="anasayfa-oldprice05">
                          <span className="anasayfa-text090">₺</span>
                          <span className="anasayfa-text091">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice05">
                          <span className="anasayfa-text093">₺</span>
                          <span className="anasayfa-text094">
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
                    <div className="anasayfa-texts08">
                      <span className="anasayfa-text096">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice06">
                        <div className="anasayfa-oldprice06">
                          <span className="anasayfa-text098">₺</span>
                          <span className="anasayfa-text099">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice06">
                          <span className="anasayfa-text101">₺</span>
                          <span className="anasayfa-text102">
                            <span>2.500,00</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anasayfa-yeniurunler">
                <h2 className="anasayfa-text104">
                  <span>YENİ ÜRÜNLER</span>
                </h2>
                <div className="anasayfa-productlist4">
                  <div className="anasayfa-product07">
                    <img
                      alt="IMAGEI252"
                      src="/external/imagei252-uwp7-200h.png"
                      className="anasayfa-image10"
                    />
                    <div className="anasayfa-texts09">
                      <span className="anasayfa-text106">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice07">
                        <div className="anasayfa-oldprice07">
                          <span className="anasayfa-text108">₺</span>
                          <span className="anasayfa-text109">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice07">
                          <span className="anasayfa-text111">₺</span>
                          <span className="anasayfa-text112">
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
                    <div className="anasayfa-texts10">
                      <span className="anasayfa-text114">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice08">
                        <div className="anasayfa-oldprice08">
                          <span className="anasayfa-text116">₺</span>
                          <span className="anasayfa-text117">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice08">
                          <span className="anasayfa-text119">₺</span>
                          <span className="anasayfa-text120">
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
                    <div className="anasayfa-texts11">
                      <span className="anasayfa-text122">
                        <span>
                          Pırlanta Beştaş Yüzük - Zamansız ve Şık Tasarım
                        </span>
                      </span>
                      <div className="anasayfa-productprice09">
                        <div className="anasayfa-oldprice09">
                          <span className="anasayfa-text124">₺</span>
                          <span className="anasayfa-text125">
                            <span>3.000,00</span>
                          </span>
                        </div>
                        <div className="anasayfa-newprice09">
                          <span className="anasayfa-text127">₺</span>
                          <span className="anasayfa-text128">
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
              <h3 className="anasayfa-text130">
                <span>Keşfedin ve Satın Alın</span>
              </h3>
              <h2 className="anasayfa-text132">
                <span>İNSTAGRAM&apos;DAN ALIŞVERİŞ YAPIN</span>
              </h2>
              <span className="anasayfa-text134">
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
              <div className="anasayfa-texts12">
                <h2 className="anasayfa-text136">
                  <span>
                    Bize katılın %20&apos;ye kadar indirimlerden faydalanın.
                  </span>
                </h2>
                <span className="anasayfa-text138">
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
                <button type="submit" className="anasayfa-button1 button">
                  KAYIT OL
                </button>
              </div>
            </form>
            <div className="anasayfa-bultentexts">
              <h3 className="anasayfa-text140">
                <span>MÜŞTERİLERİMİZ NE DİYOR</span>
              </h3>
              <img
                alt="IMAGE2534"
                src="/external/image2534-by0g-200h.png"
                className="anasayfa-image17"
              />
              <span className="anasayfa-text142">
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
                <span className="anasayfa-text144">
                  <span>Ayşe G.</span>
                </span>
                <span className="anasayfa-text146">
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
                      <div className="anasayfa-group">
                        <div className="anasayfa-group1">
                          <div className="anasayfa-group2">
                            <img
                              alt="Vector2831"
                              src="/external/vector2831-4szj.svg"
                              className="anasayfa-vector2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="anasayfa-address1">
                        <span className="anasayfa-text148">
                          <span>Merdivenköy Mahallesi Seyhan Sokak</span>
                        </span>
                        <span className="anasayfa-text150">
                          <span>Brooklyn Park C/152 Kadıköy/İstanbul</span>
                        </span>
                      </div>
                    </div>
                    <div className="anasayfa-phonetext">
                      <div className="anasayfa-group3">
                        <div className="anasayfa-group4">
                          <img
                            alt="Vector2832"
                            src="/external/vector2832-p96d.svg"
                            className="anasayfa-vector3"
                          />
                        </div>
                      </div>
                      <span className="anasayfa-text152">
                        <span>Phone: (544) 224-1449</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anasayfa-footerlinks">
                <div>
                  <span className="anasayfa-text154">
                    <span>Kurumsal</span>
                  </span>
                  <div className="anasayfa-links">
                    <span className="anasayfa-text156">
                      <span>Hakkımızda</span>
                    </span>
                    <span className="anasayfa-text158">
                      <span>İletişim</span>
                    </span>
                  </div>
                </div>
                <div className="anasayfa-links2">
                  <span className="anasayfa-text160">
                    <span>Faydalı Bağlantılar</span>
                  </span>
                  <div className="anasayfa-links1 anasayfa-links1">
                    <span className="anasayfa-text162">
                      <span>Gizlilik Politikası</span>
                    </span>
                    <span className="anasayfa-text164">
                      <span>İade ve Değişim</span>
                    </span>
                    <span className="anasayfa-text166">
                      <span>şartlar ve koşullar</span>
                    </span>
                    <span className="anasayfa-text168">
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
                className="anasayfa-rectangle"
              />
              <div className="anasayfa-copyright">
                <span className="anasayfa-text170">
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
            width: auto;
            height: auto;
            max-width: 500px;
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
          .anasayfa-text {
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
          .anasayfa-text002 {
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
          .anasayfa-text004 {
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
          .anasayfa-text006 {
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
          .anasayfa-text008 {
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
          .anasayfa-text010 {
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
          .anasayfa-text012 {
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
          .anasayfa-text014 {
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
          .anasayfa-text016 {
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
          .anasayfa-text017 {
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
          .anasayfa-text019 {
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
          .anasayfa-text020 {
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
          .anasayfa-text022 {
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
          .anasayfa-text024 {
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
          .anasayfa-text026 {
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
          .anasayfa-text028 {
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
          .anasayfa-text030 {
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
          .anasayfa-text031 {
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
          .anasayfa-text033 {
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
          .anasayfa-text034 {
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
          .anasayfa-text036 {
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
          .anasayfa-text038 {
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
          .anasayfa-text040 {
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
          .anasayfa-text042 {
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
          .anasayfa-text044 {
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
          .anasayfa-text045 {
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
          .anasayfa-text047 {
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
          .anasayfa-text048 {
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
          .anasayfa-text050 {
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
          .anasayfa-text052 {
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
          .anasayfa-text054 {
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
          .anasayfa-text056 {
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
          .anasayfa-text058 {
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
          .anasayfa-text059 {
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
          .anasayfa-text061 {
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
          .anasayfa-text062 {
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
          .anasayfa-text064 {
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
          .anasayfa-text066 {
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
            justify-content: center;
          }
          .anasayfa-image06 {
            flex: 1;
            width: auto;
            height: auto;
            max-width: 500px;
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
          .anasayfa-texts04 {
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
          .anasayfa-texts05 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .anasayfa-text068 {
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
          .anasayfa-text070 {
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
          .anasayfa-text072 {
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
          .anasayfa-text074 {
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
          .anasayfa-button {
            gap: 10px;
            display: flex;
            padding: 12px 25px;
            align-items: center;
            justify-content: center;
            background-color: rgba(33, 33, 33, 1);
          }
          .anasayfa-text076 {
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
          .anasayfa-text078 {
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
          .anasayfa-texts06 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .anasayfa-text080 {
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
          .anasayfa-text082 {
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
          .anasayfa-text083 {
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
          .anasayfa-text085 {
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
          .anasayfa-text086 {
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
          .anasayfa-text088 {
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
          .anasayfa-text090 {
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
          .anasayfa-text091 {
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
          .anasayfa-text093 {
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
          .anasayfa-text094 {
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
          .anasayfa-text096 {
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
          .anasayfa-text098 {
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
          .anasayfa-text099 {
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
          .anasayfa-text101 {
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
          .anasayfa-text102 {
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
          .anasayfa-text104 {
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
          .anasayfa-text106 {
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
          .anasayfa-text108 {
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
          .anasayfa-text109 {
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
          .anasayfa-text111 {
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
          .anasayfa-text112 {
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
          .anasayfa-text114 {
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
          .anasayfa-text116 {
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
          .anasayfa-text117 {
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
          .anasayfa-text119 {
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
          .anasayfa-text120 {
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
          .anasayfa-newprice09 {
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
          .anasayfa-text130 {
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
          .anasayfa-text132 {
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
          .anasayfa-text134 {
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
          .anasayfa-texts12 {
            gap: 10px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .anasayfa-text136 {
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
          .anasayfa-text138 {
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
          .anasayfa-button1 {
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
          .anasayfa-text140 {
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
          .anasayfa-text142 {
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
          .anasayfa-text144 {
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
          .anasayfa-text146 {
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
          .anasayfa-group {
            width: 14px;
            height: 14.000008583068848px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-group1 {
            top: 0px;
            left: 0px;
            width: 13.999933242797852px;
            height: 14.000008583068848px;
            display: flex;
            position: absolute;
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
          .anasayfa-vector2 {
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
          .anasayfa-text148 {
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
          .anasayfa-text150 {
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
          .anasayfa-group3 {
            width: 8px;
            height: 13.999999046325684px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-group4 {
            top: 0px;
            left: 0px;
            width: 7.927992820739746px;
            height: 13.999999046325684px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .anasayfa-vector3 {
            top: 0px;
            left: 0px;
            width: 8px;
            height: 14px;
            position: absolute;
          }
          .anasayfa-text152 {
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
          .anasayfa-text154 {
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
          .anasayfa-text156 {
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
          .anasayfa-text158 {
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
          .anasayfa-text160 {
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
          .anasayfa-text162 {
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
          .anasayfa-text164 {
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
          .anasayfa-text166 {
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
          .anasayfa-text168 {
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
          .anasayfa-rectangle {
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
          .anasayfa-text170 {
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
              width: 100%;
              align-items: center;
            }
            .anasayfa-slogansection {
              width: 100%;
              align-items: center;
              flex-direction: column;
            }
            .anasayfa-image {
              width: 100%;
              height: auto;
              max-width: auto;
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
            .anasayfa-image01 {
              flex: 1;
              width: 824px;
              height: auto;
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
            .anasayfa-image01 {
              width: auto;
              height: auto;
              align-self: stretch;
            }
            .anasayfa-image06 {
              width: 100vw;
              height: auto;
              align-self: center;
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
            .anasayfa-wedding {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .anasayfa-indirimsection {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
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
