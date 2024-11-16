export default function UserAccessList() {
    return (
      <section className="user-access">
        <h2>Individual Inbox Sharing</h2>
        <div>
          {/* Repeat this structure for multiple users */}
          <div className="user">
            <span>Jeremy Enderson</span>
            <select>
              <option value="full-access">Full access</option>
              <option value="metadata-only">Metadata only</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
  