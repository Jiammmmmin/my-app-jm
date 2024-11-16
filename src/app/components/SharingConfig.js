export default function SharingConfig() {
    return (
      <section className="sharing-config">
        <h2>Default Sharing Configuration</h2>
        <div>
          <label>
            <input type="radio" name="sharing" />
            Metadata only
          </label>
          <label>
            <input type="radio" name="sharing" />
            Subject line and metadata
          </label>
          <label>
            <input type="radio" name="sharing" defaultChecked />
            Full access
          </label>
        </div>
      </section>
    );
  }
  