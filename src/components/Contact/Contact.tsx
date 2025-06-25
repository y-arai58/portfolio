import './Contact.scss';

export const Contact: React.FC = () => {
  const copyEmail = () => {
    const emailElement = document.getElementById('email');
    if (!emailElement) return;
    const email = emailElement.innerText;
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert('メールアドレスをコピーしました！');
      })
      .catch((err) => {
        alert('コピーに失敗しました');
        console.error(err);
      });
  };

  return (
    <div className='contact'>
      <div className='contactInner'>
        <h2 className='contactTitle'>お問い合わせ</h2>
        <p className='contactDescription'>
          ご質問やお仕事のご依頼は、下記メールアドレスまでお気軽にお問い合わせください。
        </p>
        <button onClick={copyEmail} className='emailButton'>
          <span id='email'>y.arai.dev222@gmail.com</span>
        </button>

        {/* <form className='contactForm'>
          <div className='contactFormGroup'>
            <label htmlFor='name' className='contactLabel'>
              お名前 <span className='contactRequired'>必須</span>
            </label>
            <input type='text' id='name' className='contactInput' required />
          </div>

          <div className='contactFormGroup'>
            <label htmlFor='email' className='contactLabel'>
              メールアドレス <span className='contactRequired'>必須</span>
            </label>
            <input type='email' id='email' className='contactInput' required />
          </div>

          <div className='contactFormGroup'>
            <label htmlFor='subject' className='contactLabel'>
              件名
            </label>
            <input type='text' id='subject' className='contactInput' />
          </div>

          <div className='contactFormGroup'>
            <label htmlFor='message' className='contactLabel'>
              メッセージ <span className='contactRequired'>必須</span>
            </label>
            <textarea
              id='message'
              className='contactTextarea'
              rows={6}
              required
            ></textarea>
          </div>

          <button type='submit' className='contactSubmit'>
            送信する
          </button>
        </form> */}
      </div>
    </div>
  );
};
