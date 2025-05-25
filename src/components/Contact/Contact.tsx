import './Contact.scss';

export const Contact: React.FC = () => {
  return (
    <div className='contact'>
      <div className='contactInner'>
        <h2 className='contactTitle'>お問い合わせ</h2>
        <p className='contactDescription'>
          ご質問やお仕事のご依頼は、以下のフォームからお気軽にお問い合わせください。
        </p>

        <form className='contactForm'>
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
        </form>
      </div>
    </div>
  );
};
